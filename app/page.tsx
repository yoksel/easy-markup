import Layout from './components/layout';
import { getPostBySlug } from './utils/api';
import markdownToHtml from './utils/markdownToHtml';

export default async function App() {
  const post = getPostBySlug('index', ['title', 'slug', 'content', 'links']);
  const content = await markdownToHtml(post.content || '');

  return (
    <Layout slug='index'>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  );
}
