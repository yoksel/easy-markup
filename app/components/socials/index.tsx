import { GithubIcon, TwitterIcon } from '../icons';
import styles from './socials.module.scss';
import classNames from 'classNames';

const items = [
  {
    url: 'https://github.com/yoksel/easy-markup/',
    text: 'Github',
    type: 'github',
    icon: <GithubIcon />,
  },
  {
    url: 'https://twitter.com/yoksel',
    text: 'Twitter',
    type: 'twitter',
    icon: <TwitterIcon />,
  },
];

const Socials = () => (
  <ul className={styles.socials}>
    {items.map((item, index) => (
      <li
        className={styles.socials__item}
        key={index}
      >
        <a
          href={item.url}
          aria-label={item.text}
          className={styles.socials__link}
        >
          <span
            className={classNames(
              styles.socials__icon,
              styles[`socials__icon--${item.type}`],
            )}
          >
            {item.icon}
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
