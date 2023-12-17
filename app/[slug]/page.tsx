import { getPostBySlug } from '../utils/api';
import markdownToHtml from '../utils/markdownToHtml';
import Layout from '../components/layout';
import config from '../../config.json';
import type { Metadata } from 'next';
import Article from '../components/article';

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
  const content = markdownToHtml(post.content || '');

  return (
    <Layout slug={params.slug}>
      <Article
        title={post.title}
        content={content}
      />
    </Layout>
  );
}
