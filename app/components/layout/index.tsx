import Aside from '../aside';
import Nav from '../nav';
import styles from './layout.module.scss';

interface LayoutProps extends React.PropsWithChildren {
  slug: string
}

const Layout =({children, slug}: LayoutProps) => {
  return (
    <>
      <Nav slug={slug}/>
      <div className={styles.siteContent}>
        <main className={styles.main}>
          {children}
        </main>
        <Aside/>
      </div>
    </>
  )
}

export default Layout;
