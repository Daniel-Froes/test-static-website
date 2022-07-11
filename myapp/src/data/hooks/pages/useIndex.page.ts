import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex(){
    const posts: BlogPost[] = [
        {
            id: '1',
            slug: 'chainsaw-man',
            title: 'Novidades sobre lançamento de Chainsaw Man',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
            picture: 'https://img1.ak.crunchyroll.com/i/spire2/c00fd8bb42d1ec46a73ce66f6da15fa21624791980_main.jpg'
        },
        {
            id: '2',
            slug: 'overlord',
            title: '4º Temporada de Overlord',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
            picture: 'https://img1.ak.crunchyroll.com/i/spire4/e9b4b18afc476f49eca215b8a15616771655114212_main.jpg'
        }
    ];

    return {
        posts,
    };
}