import Link from "next/link";
import styles from "./asideNav.module.scss";

const AsideNav = ({title, links}) => {
  if(!links?.length) return null;

  return (
    <nav className={styles.asideNav}>
      <div className={styles.asideNav__title}>{title}</div>
      <ol className={styles.asideNav__list}>
        {links.map(item => {
          return <li className={styles.asideNav__item}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        })}
      </ol>
    </nav>
  )}

export default AsideNav;
