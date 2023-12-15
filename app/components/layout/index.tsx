import Aside from '../aside';
import Nav from '../nav';
import styles from './layout.module.scss';

interface LayoutProps extends React.PropsWithChildren {
  pageUrls?: PageUrl[];
}

const Layout =({children, pageUrls}: LayoutProps) => {
  return (
    <>
      <Nav/>
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
