import Link from "next/link";
import {getAllPosts} from "../../utils/api";
import Socials from "../socials";
import styles from "./siteNav.module.scss";
import classNames from 'classNames';

interface PageUrl {
  url: string;
  name: string;
}

const getPageUrls = (allPosts: PostType[]): PageUrl[] => {
  return allPosts.map(item => {return {
    name: item.title,
    url: item.slug
  }})
}

const SiteNav = ({slug}: {slug: string}) => {
  const allPosts: any = getAllPosts([
    'title',
    'slug',
  ]);
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
                slug === item.url && styles.siteNav__itemCurrent
              )}
              key={index}
            >
              <Link href={url}>{item.name}</Link>
            </li>
          )
        })}
      </ul>

      <Socials/>
    </nav>
  )
}

export default SiteNav;
