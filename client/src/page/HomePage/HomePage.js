import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Banner from '~/Layouts/components/Banner';
import Navbar from '~/Layouts/components/Navbar';
import Story from '~/Layouts/components/Story';
import Products from '~/Layouts/components/Products';
import Merchandise from '~/Layouts/components/Merchandise';
import Footer from '~/Layouts/components/Footer';
import { useContext } from 'react';
import { NavBarContext } from '~/component/context/NavBarProvider';

const cx = classNames.bind(styles);

function HomePage() {
  const { showNavbar } = useContext(NavBarContext);
  const { refHome } = useContext(NavBarContext);

  return (
    <div ref={refHome} className={cx('wrapper', { hide: showNavbar })}>
      <Banner />
      <Story />
      <Products />
      <Story />
      <Merchandise />
      <Footer />
    </div>
  );
}

export default HomePage;
