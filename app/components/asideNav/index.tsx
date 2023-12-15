import Link from "next/link";
import styles from "./asideNav.module.scss";

const AsideNav = ({title, links}) => {
  if(!links?.length) return null;

  return (
    <nav className={styles.pageNav}>
      <div className={styles.pageNav__title}>{title}</div>
      <ol className={styles.pageNav__list}>
        {links.map(item => {
          return <li className={styles.pageNav__item}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        })}
      </ol>
    </nav>
  )}

export default AsideNav;
