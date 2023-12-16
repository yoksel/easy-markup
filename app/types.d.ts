type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  // author: Author
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

interface PageUrl {
  url: string;
  text: string;
}
