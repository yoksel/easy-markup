'use client';

import { useEffect, useRef } from 'react';
import styles from './article.module.scss';

interface ArticleProps {
  title?: string;
  content: string;
}

const runStaticJSHack = async () => {
  const staticJSHack = (await import('../../staticJSHack')).default;
  staticJSHack?.();
};

const Article = ({ title, content }: ArticleProps) => {
  const heading = useRef<HTMLHeadingElement>(null);
  runStaticJSHack();

  useEffect(() => {
    heading?.current?.focus();

    console.log(heading?.current);
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
