import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
import { getPostBySlug } from '../utils/api';
// import PostTitle from '../../components/post-title'
import Head from 'next/head';
import markdownToHtml from '../utils/markdownToHtml';
import Layout from '../components/layout';
// import { CMS_NAME } from '../../lib/constants'
// import markdownToHtml from '../../lib/markdownToHtml'
// import type PostType from '../../interfaces/post'

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default async function Post({ params }: any) {
  // const router = useRouter()
  // const { post, morePosts, preview } = props;
  // const title = `${post?.title} | Next.js Blog Example with ...`
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'links',
  ]);
  const content = await markdownToHtml(post.content || '');

  return (
    <Layout slug={params.slug}>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}
