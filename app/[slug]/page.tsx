import { getPostBySlug } from '../utils/api';
import markdownToHtml from '../utils/markdownToHtml';
import Layout from '../components/layout';
import styles from './styles.module.scss';
import config from '../../config.json';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;

  // WTF
  if (slug === 'favicon.ico') {
    return null;
  }

  const post = getPostBySlug({
    slug,
    fields: ['title'],
  });

  return {
    title: `${config.title} • ${post.title}`,
    description: config.description,
  };
}

export default async function Post({ params }: any) {
  const { slug } = params;

  if (slug === 'favicon.ico') {
    return null;
  }

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
