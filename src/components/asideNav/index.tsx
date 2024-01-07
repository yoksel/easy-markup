import Link from 'next/link';
import { useId } from 'react';
import styles from './asideNav.module.scss';
import { PageUrl } from '../../types';

interface AsideNavProps {
  title: string;
  links?: PageUrl[];
}

const AsideNav = ({ title, links }: AsideNavProps) => {
  // id for every aside nav should be unique
  const id = useId();

  if (!links?.length) return null;

  return (
    <nav
      className={styles.asideNav}
      aria-labelledby={id}
    >
      <h2
        id={id}
        className={styles.asideNav__title}
      >
        {title}
      </h2>
      <ol className={styles.asideNav__list}>
        {links.map((item, index) => {
          return (
            <li
              className={styles.asideNav__item}
              key={index}
            >
              <Link href={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default AsideNav;
