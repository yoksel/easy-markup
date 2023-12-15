import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
import { getPostBySlug} from '../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import Layout from '../components/layout'
// import { CMS_NAME } from '../../lib/constants'
// import markdownToHtml from '../../lib/markdownToHtml'
// import type PostType from '../../interfaces/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default async function Post({params}: any) {
  // const router = useRouter()
  // const { post, morePosts, preview } = props;
  // const title = `${post?.title} | Next.js Blog Example with ...`
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '')

  // console.log('hello', params, post);

  return <Layout>
    <div dangerouslySetInnerHTML={{__html: post.content}}></div>
  </Layout>
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  // return (
  //   <Layout preview={preview}>
  //     <Container>
  //       <Header />
  //       {router.isFallback ? (
  //         <PostTitle>Loading…</PostTitle>
  //       ) : (
  //         <>
  //           <article className="mb-32">
  //             <Head>
  //               <title>{title}</title>
  //               <meta property="og:image" content={post.ogImage.url} />
  //             </Head>
  //             <PostHeader
  //               title={post.title}
  //               coverImage={post.coverImage}
  //               date={post.date}
  //               author={post.author}
  //             />
  //             <PostBody content={post.content} />
  //           </article>
  //         </>
  //       )}
  //     </Container>
  //   </Layout>
  // )
}
