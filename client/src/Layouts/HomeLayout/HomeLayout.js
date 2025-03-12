import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
