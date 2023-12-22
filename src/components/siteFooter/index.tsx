import { Post } from '../../types';
import SiteNav from '../siteNav';
import styles from './siteFooter.module.scss';

const SiteFooter = ({ slug, allPosts }: { slug: string; allPosts: Post[] }) => {
  return (
    <footer
      className={styles.siteFooter}
      aria-label='Подвал сайта'
    >
      <SiteNav
        slug={slug}
        ariaLabel='Нижняя навигация по сайту'
        allPosts={allPosts}
      />
    </footer>
  );
};

export default SiteFooter;
