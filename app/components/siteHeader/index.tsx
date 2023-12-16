import SiteNav from '../siteNav';
import styles from './siteHeader.module.scss';

const SiteHeader = ({ slug }: { slug: string }) => {
  const titleText = 'Простые правила разметки';
  const isHomepage = slug === 'index';
  const titleContent = isHomepage ? titleText : <a href='/'>{titleText}</a>;
  const Element = isHomepage ? 'h1' : 'div';

  return (
    <header className={styles.siteHeader}>
      <Element className={styles.siteHeader__title}>{titleContent}</Element>

      <SiteNav slug={slug} />
    </header>
  );
};

export default SiteHeader;
