import SiteNav from "../siteNav";
import styles from './siteFooter.module.scss';

const SiteFooter = ({slug}: {slug: string}) => {
  return (
    <footer className={styles.siteFooter}>
      <SiteNav slug={slug}/>
    </footer>
  )
}

export default SiteFooter;
