import classNames from 'classnames/bind';
import styles from './TitleComp.module.scss';

const cx = classNames.bind(styles);

function TitleComp({ children, ref }) {
  return <h2 ref={ref} className={cx('title')}>{children}</h2>;
}

export default TitleComp;
