import classNames from 'classNames';
import styles from './aside.module.scss';
import {getPostBySlug} from '../../lib/api';
import AsideNav from '../asideNav';

const projects = [
  {
    name: 'Простые правила разметки',
    url: '/'
  },
  {
    name: 'Простой CSS',
    url: 'https://yoksel.github.io/easy-css/'
  },
  {
    name: 'HTML & CSS: как не надо',
    url: 'https://yoksel.github.io/bad-practices/'
  },
];

const Aside = ({className, slug}: {className: string, slug: string}) => {
  const {links, additional_links} = getPostBySlug(slug, [
    'links'
  ]);

  return (
    <aside className={classNames(styles.aside, className) }>
      <AsideNav title="На этой странице:" links={links}/>

      {slug === 'index' && (
        <AsideNav title="Проекты по теме:" links={projects}/>
      )}

      {additional_links && (
        <AsideNav title="Полезные ссылки:" links={additional_links}/>
      )}
    </aside>
  )
}

export default Aside;
