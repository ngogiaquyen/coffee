import classNames from 'classnames/bind';
import styles from './Story.module.scss';
import Button from '~/component/Button';
import Img from '~/component/Img';
import images from '~/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import { WheelContext } from '~/component/context/WheelProvider';
import useOnScreen from '~/hooks/useOnScreen';

const cx = classNames.bind(styles);

// style={{ "--translateY": `-${translateY}px` }
function Story() {
  const divRef = useRef(null);
  const { translateY } = useContext(WheelContext);
  const isVisible = useOnScreen(divRef);
  return (
    <div className={cx('wrapper', { fadeout: isVisible })} ref={divRef}>
      <div className={cx('long')}>
        <Img src={images.blockLong} />
      </div>
      <div className={cx('content')}>
        <p className={cx('text')}>
          Nojawen Cafe được thành lập vào tháng 4 năm 2017 với sứ mệnh mang đến trải nghiệm cà phê tuyệt vời cho mọi
          người. Khởi đầu từ một quán nhỏ trên đường Bà Triệu, Nojawen Cafe không ngừng phát triển. Đến năm 2019, quán
          đã mở rộng với 5 chi nhánh, trong đó có một chi nhánh tại BecLin.
        </p>
        <Button>
          LỊCH SỬ HÌNH THÀNH
          <FontAwesomeIcon className={cx('icon')} icon={faRightLong} />
        </Button>
      </div>
      <div className={cx('image')}>
        <Img className={cx('img')} src={images.story} />
      </div>
    </div>
  );
}

export default Story;
