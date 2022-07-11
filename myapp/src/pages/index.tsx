import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useIndex from '../data/hooks/pages/useIndex.page'
import PostList from '../ui/components/PostList/PostList'


const Home: NextPage = () => {
  const {posts} = useIndex()
  return (
    <div>
      <Head>
          <title>TreinaBlog</title>
      </Head>
      <main>
        <PostList posts={posts}/>
      </main>
      
    </div>
  )
}

export default Home
