'use client';

import { useEffect, useRef } from 'react';
import styles from './article.module.scss';

interface ArticleProps {
  title?: string | null;
  content: string;
}

const Article = ({ title, content }: ArticleProps) => {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Work on static version on second visited page but for all rerenders
    heading?.current?.focus();

    if (typeof window !== 'undefined') {
      // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
      (window as any).__CPEmbed?.();
    }
  });

  return (
    <article
      className={styles.article}
      aria-labelledby='article-title'
    >
      {title && (
        <h1
          ref={heading}
          className={styles.article__title}
          tabIndex={-1}
          id='article-title'
        >
          {title}
        </h1>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};

export default Article;
