import Aside from '../aside';
import SiteFooter from '../siteFooter';
import SiteHeader from '../siteHeader';
import styles from './layout.module.scss';

interface LayoutProps extends React.PropsWithChildren {
  slug: string
}

const Layout =({children, slug}: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <SiteHeader slug={slug}/>
      <div className={styles.siteContent}>
        <main className={styles.main}>
          {children}
        </main>
        <Aside className={styles.aside}/>
      </div>
      <SiteFooter slug={slug}/>
    </div>
  )
}

export default Layout;
