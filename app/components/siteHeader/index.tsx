import SiteNav from '../siteNav';
import styles from './siteHeader.module.scss';

const SiteHeader = ({ slug }: { slug: string }) => (
  <header className={styles.siteHeader}>
    <h1>Простые правила разметки</h1>

    <SiteNav slug={slug} />
  </header>
);

export default SiteHeader;
