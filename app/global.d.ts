interface Post {
  slug?: string;
  title?: string;
  content?: string;
  order?: number;
  links?: PageUrl[];
  additional_links?: PageUrl[];
}

interface PageUrl {
  url: string;
  text: string;
}

// to support delayed embeds from Codepen
interface Window {
  __CPEmbed(): void;
}
