import { getPostBySlug } from '../utils/api';
import Head from 'next/head';
import markdownToHtml from '../utils/markdownToHtml';
import Layout from '../components/layout';
import styles from './styles.module.scss';

export default async function Post({ params }: any) {
  // const router = useRouter()
  // const { post, morePosts, preview } = props;
  // const title = `${post?.title} | Next.js Blog Example with ...`
  const { slug } = params;
  const post = getPostBySlug({
    slug,
    fields: ['title', 'slug', 'content', 'links'],
  });
  const content = await markdownToHtml(post.content || '');

  return (
    <Layout slug={params.slug}>
      <article className={styles.post}>
        <h1 className={styles.post__title}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </Layout>
  );
}
