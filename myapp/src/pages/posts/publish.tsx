import { FormEvent, useRef, useState } from "react";
import { ApiService } from "../../data/services/ApiService";
import styles from "../../ui/styles/pages/posts/publish.module.css";
import { useSession, signIn, signOut } from "next-auth/react";


export default function PostsPublish() {
  const {data: session} = useSession();
  const [title, setTitle] = useState(""),
    [description, setDescription] = useState(""),
    [picture, setPicture] = useState(""),
    blogEditorRef = useRef<HTMLDivElement>(null);

    async function sendPost(event: FormEvent){
        event.preventDefault();
        const postContent = blogEditorRef.current?.innerHTML || '';
        if(
            title.length > 0 && 
            description.length > 0 &&
            picture.length > 0 &&
            postContent.length > 0 
        ){
            ApiService.post('posts', {
                data: {
                    title,
                    description,
                    picture,
                    content: postContent,
                },
            });
            resetForm();
        }
    }

    function resetForm(){
        setTitle('');
        setDescription('')
        setPicture('')
        if(blogEditorRef.current){
            blogEditorRef.current.innerHTML = '';
        }

    }

    if(!session){
      return (
        <div className={styles['login-container']}>
           <button onClick={() => signIn()}>Login</button>
        </div>)
    }

  return (
    <>
      <button onClick={() => signIn()}>Logout</button>
      <h2 className={styles["page-title"]}>Novo Post</h2>
      <form onSubmit={sendPost} className={styles["post-form"]} >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Descrição"
        />
        <input
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
          type="url"
          placeholder="Imagem"
        />

        <div ref={blogEditorRef} className={styles['post-content']} contentEditable/>

        <button type="submit">Publicar</button>
      </form>
      
    </>
  );
}
