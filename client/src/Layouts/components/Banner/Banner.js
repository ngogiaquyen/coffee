import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import bgr from '~/assets/bg1.jpg';
import logo from '~/assets/logo.png';


import VideoCard from '~/component/VideoCard';
import images from '~/assets';

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx('wrapper')} style={{ backgroundImage: `url(${bgr})` }}>
    {/* <div className={cx('wrapper')}> */}
      <VideoCard className={cx("video-wrap")} loop={true} src={images.bannerVideo}/>
      <div className={cx("overlay")}></div>
      <img className={cx("logo")} src={logo}/>
    </div>
  );
}

export default Banner;
