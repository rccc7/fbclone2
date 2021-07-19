import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {
  // If there is no session, then return the Login component, otherwise return the app
  if (!session) return <Login />;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook by RCCC 😎</title>

      </Head>

      <h1>Hey Guys What is up! It's me RCCC 😎 Let's build Facebook (Clone)</h1>
      {/* Header */}
      <Header />
      {/* Main section of the page */}
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed
        Here, we pass the server rendered posts to the Feed component */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

//server side rendering
export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);

  //Serverside rendering of the saved posts so that the posts will be rendered
  //faster
  const posts = await db.collection('posts').orderBy(
    'timestamp', 'desc').get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null, //Here timestamp is null because in the pre-fetch we don't fetch timpstamp
  }))

  // this props object will be sent automaticall to the component (Home)
  return {
    props: {
      session,
      posts: docs
    }
  }
}
