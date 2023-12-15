import {getAllPosts} from "../../lib/api";
import styles from "./nav.module.scss";

interface PageUrl {
  url: string;
  text: string;
}

interface Nav {
  pageUrls: PageUrl[]
}

const getPageUrls = (allPosts: PostType[]) => {
  return allPosts.map(item => {return {
    name: item.title,
    url: item.slug
  }})
}

const Nav = (props) => {
  const allPosts: any = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  console.log({allPosts})
  const pageUrls = getPageUrls(allPosts);

  console.log(props.pageUrls)
  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNav__list}>
        {pageUrls.map(item => {
          return (
            <li><a href={item.url}>{item.name}</a></li>
          )
        })}
      </ul>

      <ul className="socials">
        <li className="socials__item">
          <a href="https://github.com/yoksel/easy-markup/">Github</a>
        </li>
        <li className="socials__item">
          <a href="https://twitter.com/yoksel">Github</a>
        </li>
      </ul>

      {/* <ul className="socials">
        <li className="socials__item">
          {% include link-github.html username='yoksel/easy-markup/' %}
        </li>
        <li className="socials__item">
          {% include link-twitter.html username='yoksel' %}
        </li>
      </ul> */}
    </nav>
  )
}

export default Nav;
