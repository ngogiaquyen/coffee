import classNames from 'classnames/bind';
import styles from './Img.module.scss';
const cx = classNames.bind(styles);

function Img({ className, src, alt = '', ref=null }) {
  return <img ref={ref} src={src} alt={alt} className={cx("img", className)} />;
}

export default Img;
