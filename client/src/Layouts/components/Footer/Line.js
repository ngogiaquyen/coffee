import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Line() {
  return <div className={cx('line')}></div>;
}

export default Line;
