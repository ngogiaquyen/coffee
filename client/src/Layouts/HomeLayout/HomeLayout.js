import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import Bars from '../components/Bars';
import Navbar from '../components/Navbar';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Navbar />
      <div className={cx('container')}>{children}</div>
      <Bars />
    </div>
  );
}

export default HomeLayout;
