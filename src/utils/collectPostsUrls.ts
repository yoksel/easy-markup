import fs from 'fs';
import { getPostSlugs } from './api';

const collectPostsUrls = () => {
  const slugs = getPostSlugs().map((slug) => `'/${slug.replace(/\.md$/, '')}'`);
  const content = `/* npm run getPosts */\n\nconst postList = [${slugs.join(', ')}];

export default postList;`;

  fs.writeFileSync('src/postsList.ts', content);
};

collectPostsUrls();

console.log(collectPostsUrls());
