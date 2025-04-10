import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Img from '~/component/Img';
import images from '~/assets';
import TitleComp from '~/component/TitleComp';
import { useRef } from 'react';
import useOnScreen from '~/hooks/useOnScreen';

const cx = classNames.bind(styles);

function Products() {
  
  const divRef = useRef(null);
  const isVisible = useOnScreen(divRef);
  return (
    <div ref={divRef}  className={cx('wrapper')}>
      <div className={cx("container", {fadeout: isVisible})}>
        <TitleComp >SẢN PHẨM</TitleComp>
        <div className={cx('products')}>
          <div className={cx('item')}>
            <Img src={images.product} className={cx('img')} />
            <h3 className={cx('name')}>Black Cookie Latte</h3>
          </div>
          <div className={cx('item')}>
            <Img src={images.product} className={cx('img')} />
            <h3 className={cx('name')}>Black Cookie Latte</h3>
          </div>
          <div className={cx('item')}>
            <Img src={images.product} className={cx('img')} />
            <h3 className={cx('name')}>Black Cookie Latte</h3>
          </div>
          <div className={cx('item')}>
            <Img src={images.product} className={cx('img')} />
            <h3 className={cx('name')}>Black Cookie Latte</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
