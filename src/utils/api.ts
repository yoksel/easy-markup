// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../types';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

type Fields = (keyof Post)[];

interface GetPostBySlugArgs {
  slug: string;
  fields: Fields;
}

export function getPostBySlug(args: GetPostBySlugArgs): Post {
  const { slug, fields = [] } = args;

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const dataTyped: Post = data;

  const filteredFields: { [key: string]: unknown } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      filteredFields[field] = realSlug;
    }
    if (field === 'content') {
      filteredFields[field] = content;
    }

    if (data[field] !== undefined) {
      filteredFields[field] = dataTyped[field];
    }
  });

  return filteredFields;
}

export function getAllPosts(fields: Fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug({ slug, fields }))
    // sort posts by order in ascending order
    .sort((post1, post2) => {
      if (post1.order && post2.order) {
        return post1.order - post2.order;
      }

      return 0;
    });
  return posts;
}
