import React from 'react';
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import { getAllPosts, getPostBySlug } from '../utils/api';
import markdownToHtml from '../utils/markdownToHtml';
import Article from '../components/article';
import Layout from '../components/layout';
import postsList from '../postsList';
import { Post } from '../types';

export const getStaticPaths = (async () => {
  return {
    // List of all paths which should be created during the build
    paths: postsList,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context?.params || {};

  if (!slug || Array.isArray(slug)) {
    throw new Error('No such page');
  }

  const post = getPostBySlug({
    slug,
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
      <Article
        title={post.title}
        content={content}
      />
    </Layout>
  );
}
