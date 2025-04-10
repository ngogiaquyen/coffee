import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, long, light }) {
  return <button className={cx('button', { long: long, light: light })}>{children}</button>;
}

export default Button;
