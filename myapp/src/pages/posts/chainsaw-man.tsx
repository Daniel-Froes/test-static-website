import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody 
        post={{
            id: '',
            title: 'Novidades sobre lançamento de Chainsaw Man',
            description: '',
            picture: 'https://img1.ak.crunchyroll.com/i/spire2/c00fd8bb42d1ec46a73ce66f6da15fa21624791980_main.jpg',
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
