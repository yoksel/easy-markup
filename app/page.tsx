import Layout from './components/layout'
import { getPostBySlug } from './lib/api'
import markdownToHtml from './lib/markdownToHtml';

export default async function App() {
  const post = getPostBySlug('index', [
    'title',
    'slug',
    'content',
    'links'
  ]);
  const content = await markdownToHtml(post.content || '');

  return (
    <Layout slug='index'>
    <div dangerouslySetInnerHTML={{__html: content}}></div>
  </Layout>
  )
}
