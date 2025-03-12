import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import { useContext } from 'react';
import { ScrolledPastContext } from '~/component/Context/ScrolledPastProvder';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  const { bottomCompRef } = useContext(ScrolledPastContext);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')} ref={bottomCompRef}>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
