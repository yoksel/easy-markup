import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getAllPosts, getPostBySlug } from '../utils/api';
import markdownToHtml from '../utils/markdownToHtml';
import Article from '../components/article';
import Layout from '../components/layout';
import { Post } from '../types';

export const getStaticProps = (async () => {
  const post = getPostBySlug({
    slug: 'index',
    fields: ['title', 'slug', 'content', 'links', 'additional_links'],
  });

  if (!post) {
    throw new Error('Post not found');
  }

  const allPosts = getAllPosts(['title', 'slug', 'order']);

  return { props: { post, allPosts } };
}) satisfies GetStaticProps<{
  post: Post;
  allPosts: Post[];
}>;

export default function Page({
  post,
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = markdownToHtml(post?.content || '');

  return (
    <Layout
      slug={post.slug!}
      post={post}
      allPosts={allPosts}
    >
      <Article content={content} />
    </Layout>
  );
}
