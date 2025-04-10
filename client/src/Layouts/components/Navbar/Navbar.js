import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Img from '~/component/Img';
import { FaInstagram } from 'react-icons/fa';

import logo from '~/assets/logoimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { NavBarContext } from '~/component/context/NavBarProvider';

const cx = classNames.bind(styles);

function Navbar() {
  const { large, setShowNavbar } = useContext(NavBarContext);

  const handleClick = () => {
    setShowNavbar(true);
  };

  return (
    <header className={cx('header', {bgr: !large})}>
      <div className={cx("wrapper")}>
        <FaInstagram className={cx('insta')} />
        {large ? <Img className={cx('logo')} src={logo} /> : <Img className={cx('logo2')} src={logo} />}
        <FontAwesomeIcon className={cx('bar')} icon={faBars} onClick={handleClick} />
      </div>
    </header>
  );
}

export default Navbar;
