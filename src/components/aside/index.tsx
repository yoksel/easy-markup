import classnames from 'classnames';
import styles from './aside.module.scss';
import AsideNav from '../asideNav';
import { Post } from '../../types';

const projects = [
  {
    text: 'Простые правила разметки',
    url: '/',
  },
  {
    text: 'Простой CSS',
    url: 'https://yoksel.github.io/easy-css/',
  },
  {
    text: 'HTML & CSS: как не надо',
    url: 'https://yoksel.github.io/bad-practices/',
  },
];

const Aside = ({
  className,
  slug,
  post,
}: {
  className: string;
  slug: string;
  post: Post;
}) => {
  const { links, additional_links } = post;

  return (
    <aside
      className={classnames(styles.aside, className)}
      aria-label='Дополнительные ссылки'
    >
      <AsideNav
        title='На этой странице:'
        links={links}
      />

      {slug === 'index' && (
        <AsideNav
          title='Проекты по теме:'
          links={projects}
        />
      )}

      {additional_links && (
        <AsideNav
          title='Полезные ссылки:'
          links={additional_links}
        />
      )}
    </aside>
  );
};

export default Aside;
