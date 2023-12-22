// Not using global because issues with types in node script

export interface Post {
  slug?: string;
  title?: string;
  content?: string;
  order?: number;
  links?: PageUrl[];
  additional_links?: PageUrl[];
}

export interface PageUrl {
  url: string;
  text: string;
}
