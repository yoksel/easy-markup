interface Post {
  slug?: string;
  title?: string;
  content?: string;
  order?: number;
  links?: PageUrl[];
  additional_links?: PageUrl[];
};

interface PageUrl {
  url: string;
  text: string;
}
