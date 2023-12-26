import Aside from '../aside';
import SiteFooter from '../siteFooter';
import SiteHeader from '../siteHeader';
import styles from './layout.module.scss';
import { Post } from '../../types';
import CustomHead from '../customHead';

interface LayoutProps extends React.PropsWithChildren {
  slug: string;
  post?: Post;
  allPosts?: Post[];
}

interface GetPageTitleArgs {
  title?: string | null;
  slug: string;
}

const getPageTitle = ({ title, slug }: GetPageTitleArgs) => {
  if (title) return title;

  return slug === '404' ? 'Страница не найдена' : undefined;
};

const Layout = ({ children, slug, post, allPosts }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <CustomHead title={getPageTitle({ title: post?.title, slug })} />
      {allPosts && (
        <SiteHeader
          slug={slug}
          allPosts={allPosts}
        />
      )}
      <div className={styles.siteContent}>
        <main
          id='main'
          className={styles.main}
        >
          {children}
        </main>
        {post && (
          <Aside
            slug={slug}
            className={styles.aside}
            post={post}
          />
        )}
      </div>
      {allPosts && (
        <SiteFooter
          slug={slug}
          allPosts={allPosts}
        />
      )}
    </div>
  );
};

export default Layout;
