import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody 
        post={{
            id: '',
            title: '4º Temporada de Overlord',
            description: '',
            picture: 'https://img1.ak.crunchyroll.com/i/spire4/e9b4b18afc476f49eca215b8a15616771655114212_main.jpg',
            slug:'',
            content: (
                <>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
                </>
            ),
        }}
      />
    </>
  );
}
