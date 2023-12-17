import SiteNav from '../siteNav';
import styles from './siteHeader.module.scss';

const SiteHeader = ({ slug }: { slug: string }) => {
  const titleText = 'Простые правила разметки';
  const isHomepage = slug === 'index';
  const titleContent = isHomepage ? titleText : <a href='/'>{titleText}</a>;
  const Element = isHomepage ? 'h1' : 'div';

  return (
    <header
      className={styles.siteHeader}
      aria-label='Шапка сайта'
    >
      <div className={styles.siteHeader__titleWrapper}>
        <Element className={styles.siteHeader__title}>{titleContent}</Element>
        <a
          className={styles.siteHeader__skipToMainLink}
          href='#main'
        >
          Перейти к основному содержимому
        </a>
      </div>

      <SiteNav
        slug={slug}
        ariaLabel='Верхняя навигация по сайту'
      />
    </header>
  );
};

export default SiteHeader;
