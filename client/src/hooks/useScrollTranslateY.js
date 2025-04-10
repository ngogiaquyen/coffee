import { useEffect, useState } from 'react';

const useScrollTranslateY = (ref, initialTranslateY, v, minOffset, maxOffset) => {
  const [translateY, setTranslateY] = useState(initialTranslateY);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

      const isVisible = visibleHeight >= elementHeight * 1; // Xuất hiện ít nhất 50% mới chạy

      if (isVisible) {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        setTranslateY((prev) => {
          let newTranslateY = prev - delta * v; // Đảo chiều khi cuộn xuống

          // Giữ translateY trong khoảng hợp lệ
          return Math.max(initialTranslateY + minOffset, Math.min(newTranslateY, initialTranslateY + maxOffset));
        });

        setLastScrollY(currentScrollY);
      } else {
        setTranslateY(initialTranslateY);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateY(${translateY}px)`;
    }
  }, [translateY]);

  return translateY;
};

export default useScrollTranslateY;
