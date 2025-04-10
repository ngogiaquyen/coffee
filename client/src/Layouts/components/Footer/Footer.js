import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Img from '~/component/Img';
import images from '~/assets';
import Line from './Line';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <h3 className={cx('title')}>LIÊN HỆ</h3>
        <div className={cx('conent')}>
          <span className={cx('name')}>Nojawen Cafe</span>
          <p className={cx('more')}>
            18 Quang Truong Vo Nguyen Giap, <br /> Thai Nguyen, Viet Nam <br /> Phone: 0356.197.132 <br /> Email:
            ngogiaquyendhtn223@gmail.com
          </p>
          <Img className={cx('img')} src={images.logo} />
        </div>
      </div>
      <div className={cx('item')}>
        <h3 className={cx('title')}>GIỜ MỞ CỬA</h3>
        <div className={cx('conent')}>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ HAI</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ BA</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ TƯ</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ NĂM</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ SÁU</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>THỨ BẢY</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
          <div className={cx('row')}>
            <span className={cx('row-bold')}>CHỦ NHẬT</span>
            <span className={cx('times')}>
              <span className={cx('time-text')}>7:00 am</span>
              <span className={cx('time-text')}>-</span>
              <span className={cx('time-text')}>5:00 pm</span>
            </span>
          </div>
        </div>
      </div>
      <div className={cx('item')}>
        <h3 className={cx('title')}>BÀI VIẾT</h3>
        <div className={cx('conent')}>
          <div className={cx('box')}>
            <span className={cx('name')}>No Ja Wen Cafe Updates 2024</span>
            <p className={cx('time')}>October 2, 2024</p>
          </div>
          <Line />
          <div className={cx('box')}>
            <span className={cx('name')}>No Ja Wen Cafe Updates 2024</span>
            <p className={cx('time')}>October 2, 2024</p>
          </div>
          <Line />
          <div className={cx('box')}>
            <span className={cx('name')}>No Ja Wen Cafe Updates 2024</span>
            <p className={cx('time')}>October 2, 2024</p>
          </div>
          <Line />
          <div className={cx('box')}>
            <span className={cx('name')}>No Ja Wen Cafe Updates 2024</span>
            <p className={cx('time')}>October 2, 2024</p>
          </div>
        </div>
      </div>
      <div className={cx('item')}>
        <h3 className={cx('title')}>LIÊN KẾT</h3>
        <div className={cx('conent')}>
          <NavLink className={cx('link')} to="#">
            Trang chủ
          </NavLink>
          <NavLink className={cx('link')} to="#">
            Bài viết
          </NavLink>
          <NavLink className={cx('link')} to="#">
            Coffee & Đồ uống
          </NavLink>
          <NavLink className={cx('link')} to="#">
            Phản hồi của khách hàng
          </NavLink>
          <NavLink className={cx('link')} to="#">
            Liên hệ với chúng tôi
          </NavLink>
          <NavLink className={cx('link')} to="#">
            Các món đặc biệt trong ngày
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
