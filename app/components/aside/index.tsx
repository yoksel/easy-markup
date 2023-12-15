import classNames from 'classNames';
import styles from './aside.module.scss';

const Aside = ({className}: {className: string}) => {
  return (
    <aside className={classNames(styles.aside, className) }>
      <ul>
        <li>1</li>
      </ul>
      <ul>
        <li>2</li>
      </ul>
    </aside>
  )
}

export default Aside;
