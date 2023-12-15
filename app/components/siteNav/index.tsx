import {getAllPosts} from "../../lib/api";
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
          return (
            <li
              className={classNames(
                styles.siteNav__item,
                slug === item.url && styles.siteNav__itemCurrent
              )}
              key={index}
            >
              <a href={item.url}>{item.name}</a>
            </li>
          )
        })}
      </ul>

      <Socials/>
    </nav>
  )
}

export default SiteNav;
