import Link from 'next/link';
import { getAllPosts } from '../../utils/api';
import Socials from '../socials';
import styles from './siteNav.module.scss';
import classNames from 'classNames';

interface SiteNavProps {
  slug: string;
  ariaLabel: string;
}

const getPageUrls = (allPosts: Post[]): PageUrl[] => {
  return allPosts.map((item) => {
    return {
      text: item.title,
      url: item.slug,
    };
  });
};

const getUrl = (url: string) => {
  const isHomePageLink = url === 'index';

  return isHomePageLink ? '/' : url;
};

const SiteNav = ({ slug, ariaLabel }: SiteNavProps) => {
  const allPosts = getAllPosts(['title', 'slug', 'order']);
  const pageUrls = getPageUrls(allPosts);

  return (
    <nav
      className={styles.siteNav}
      aria-label={ariaLabel}
    >
      <ul className={styles.siteNav__list}>
        {pageUrls.map((item, index) => {
          const isCurrent = slug === item.url;
          const href = getUrl(item.url);

          return (
            <li
              className={classNames(
                styles.siteNav__item,
                isCurrent && styles.siteNav__itemCurrent,
              )}
              key={index}
            >
              <Link
                href={href}
                aria-current={isCurrent ? 'page' : 'false'}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>

      <Socials />
    </nav>
  );
};

export default SiteNav;
