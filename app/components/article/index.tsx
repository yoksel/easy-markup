'use client';

import { useEffect } from 'react';
import styles from './article.module.scss';

interface ArticleProps {
  title: string;
  content: string;
}

const Article = ({ title, content }: ArticleProps) => {
  useEffect(() => {
    // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
    window.__CPEmbed?.();
  }, []);

  return (
    <article className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};

export default Article;
