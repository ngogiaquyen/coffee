import classNames from 'classnames/bind';
import styles from './Bars.module.scss';
import images from '~/assets';
import Img from '~/component/Img';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { NavBarContext } from '~/component/context/NavBarProvider';

const cx = classNames.bind(styles);

function Bars() {
  const { showNavbar, setShowNavbar } = useContext(NavBarContext);
  const handleClick = ()=>{
    setShowNavbar(false);
  }
  return (
    <div className={cx('wrapper', {show: showNavbar})}>
      <Img className={cx("logo")} src={images.logo} />
      <nav className={cx('nav')}>
        <NavLink className={cx("link")} to="#">TRANG CHỦ</NavLink>
        <NavLink className={cx("link")} to="#">CÂU TRUYỆN</NavLink>
        <NavLink className={cx("link")} to="#">MENU</NavLink>
        <NavLink className={cx("link")} to="#">VỊ TRÍ</NavLink>
        <NavLink className={cx("link")} to="#">SẢN PHẨM</NavLink>
        <NavLink className={cx("link")} to="#">LIÊN HỆ</NavLink>
      </nav>
      <FontAwesomeIcon className={cx("icon")} icon={faXmark} onClick={handleClick} />
    </div>
  );
}

export default Bars;
