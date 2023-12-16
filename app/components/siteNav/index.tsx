import Link from 'next/link';
import { getAllPosts } from '../../utils/api';
import Socials from '../socials';
import styles from './siteNav.module.scss';
import classNames from 'classNames';

const getPageUrls = (allPosts: Post[]): PageUrl[] => {
  return allPosts.map((item) => {
    return {
      text: item.title,
      url: item.slug,
    };
  });
};

const SiteNav = ({ slug }: { slug: string }) => {
  const allPosts = getAllPosts(['title', 'slug', 'order']);
  const pageUrls = getPageUrls(allPosts);

  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNav__list}>
        {pageUrls.map((item, index) => {
          const url = item.url === 'index' ? '/' : item.url;

          return (
            <li
              className={classNames(
                styles.siteNav__item,
                slug === item.url && styles.siteNav__itemCurrent,
              )}
              key={index}
            >
              <Link href={url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>

      <Socials />
    </nav>
  );
};

export default SiteNav;
