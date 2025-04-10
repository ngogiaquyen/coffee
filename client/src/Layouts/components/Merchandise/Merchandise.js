import classNames from 'classnames/bind';
import styles from './Merchandise.module.scss';
import TitleComp from '~/component/TitleComp';
import Img from '~/component/Img';
import images from '~/assets';
import Button from '~/component/Button';
import { useRef } from 'react';
import useScrollTranslateY from '~/hooks/useScrollTranslateY';

const cx = classNames.bind(styles);

function Merchandise() {

  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  useScrollTranslateY(elementRef1, 50, 0.5, -50, 100);
  useScrollTranslateY(elementRef2, 170, 0.5, 10, 50);
  useScrollTranslateY(elementRef3, -50, 0.5, -50, 200);
  
  return (
    <div className={cx('wrapper')}>
      <TitleComp>SẢN PHẨM</TitleComp>
      <div className={cx('products')}>
        <div className={cx('item')}>
          <Img src={images.clother} ref={elementRef1} />
        </div>
        <div className={cx('item')}>
          <Img src={images.clother}  ref={elementRef2} />
        </div>
        <div className={cx('item')}>
          <Img src={images.clother}  ref={elementRef3} />
        </div>
      </div>
      <div className={cx("btns")}>
        <Button long>ĐẶT HÀNG NGAY</Button>
        <Button long light>TẤT CẢ SẢN PHẨM</Button>
      </div>
    </div>
  );
}

export default Merchandise;
