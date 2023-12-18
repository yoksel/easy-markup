import SiteNav from '../siteNav';
import styles from './siteFooter.module.scss';

const SiteFooter = ({ slug }: { slug: string }) => {
  return (
    <footer
      className={styles.siteFooter}
      aria-label='Подвал сайта'
    >
      <SiteNav
        slug={slug}
        ariaLabel='Нижняя навигация по сайту'
      />
    </footer>
  );
};

export default SiteFooter;
