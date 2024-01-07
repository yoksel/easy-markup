import Link from 'next/link';
// import { getAllPosts } from '../../app/utils/api';
import Socials from '../socials';
import styles from './siteNav.module.scss';
import classnames from 'classnames';
import { PageUrl, Post } from '../../types';

interface SiteNavProps {
  slug: string;
  ariaLabel: string;
  allPosts: Post[];
}

const sortByOrder = (post1: Post, post2: Post) => {
  if (post1.order !== undefined && post2.order !== undefined) {
    return post1.order - post2.order;
  }

  return 0;
};

const getPageUrls = (allPosts: Post[]): PageUrl[] => {
  const allPostsFiltered = allPosts.filter(({ title, slug }) => title && slug);
  allPostsFiltered.sort(sortByOrder);

  return allPostsFiltered.map((item) => {
    return {
      text: item.title!,
      url: item.slug!,
    };
  });
};

const getUrl = (url: string) => {
  const isHomePageLink = url === 'index';

  return isHomePageLink ? '/' : url;
};

const SiteNav = ({ slug, ariaLabel, allPosts }: SiteNavProps) => {
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
              className={classnames(
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
