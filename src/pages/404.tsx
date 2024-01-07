import type { GetStaticProps } from 'next';
import Layout from '../components/layout';
import { getAllPosts } from '../utils/api';
import { Post } from '../types';

export const getStaticProps = (() => {
  const allPosts = getAllPosts(['title', 'slug', 'order']);
  return { props: { allPosts } };
}) satisfies GetStaticProps<{
  allPosts: Post[];
}>;

function Page404({ allPosts }: { allPosts: Post[] }) {
  return (
    <Layout
      slug='404'
      allPosts={allPosts}
    >
      <h1>404</h1>
      <p>Страница не найдена</p>
      <p>
        <a href='/easy-markup'>Вернуться на главную</a>
      </p>
    </Layout>
  );
}

export default Page404;
