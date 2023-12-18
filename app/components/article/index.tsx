'use client';

import { useEffect, useRef } from 'react';
import styles from './article.module.scss';

interface ArticleProps {
  title?: string;
  content: string;
}

const Article = ({ title, content }: ArticleProps) => {
  const heading = useRef(null);
  useEffect(() => {
    // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
    window.__CPEmbed?.();
    heading?.current?.focus();
  }, []);

  return (
    <article className={styles.article}>
      {title && (
        <h1
          ref={heading}
          className={styles.article__title}
          tabIndex={-1}
        >
          {title}
        </h1>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};

export default Article;