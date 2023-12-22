import Aside from '../aside';
import SiteFooter from '../siteFooter';
import SiteHeader from '../siteHeader';
import styles from './layout.module.scss';
import { Post } from '../../types';

interface LayoutProps extends React.PropsWithChildren {
  slug: string;
  post: Post;
  allPosts: Post[];
}

const Layout = ({ children, slug, post, allPosts }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <SiteHeader
        slug={slug}
        allPosts={allPosts}
      />
      <div className={styles.siteContent}>
        <main
          id='main'
          className={styles.main}
        >
          {children}
        </main>
        <Aside
          slug={slug}
          className={styles.aside}
          post={post}
        />
      </div>
      <SiteFooter
        slug={slug}
        allPosts={allPosts}
      />
    </div>
  );
};

export default Layout;
