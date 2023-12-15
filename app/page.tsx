// export default function Page() {
//   return <>
//     <h1>Hello, Next.js!</h1>
//     <p>Разметка страницы может быть непростым занятием, особенно поначалу. Какой тег выбрать? Какой класс добавить? Какой должна быть разметка, чтобы стили одного элемента не поломали другой?</p>
//   </>
// }

// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
import {NextPageContext} from 'next'
import Layout from './components/layout'
import { getAllPosts } from './lib/api'
import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'
// import Post from '../interfaces/post'



export default function App() {
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  )
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  // console.log(allPosts);
  // return (
  //   <>
  //     <Layout>
  //       <Head>
  //         <title>{`Next.js Blog Example with ...`}</title>
  //       </Head>
  //       {/* {heroPost && (
  //         {heroPost.title}
  //       )} */}
  //     </Layout>
  //   </>
  // )
}
