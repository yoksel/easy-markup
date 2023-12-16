import Layout from './components/layout';
import { getPostBySlug } from './utils/api';
import markdownToHtml from './utils/markdownToHtml';
import type { Metadata } from 'next';
import config from '../config.json';

export function generateMetadata(): Metadata {
  return {
    title: `${config.title}`,
    description: config.description,
  };
}

export default function App() {
  const post = getPostBySlug({
    slug: 'index',
    fields: ['title', 'slug', 'content', 'links']
  });
  const content = markdownToHtml(post.content || '');

  return (
    <Layout slug='index'>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}
