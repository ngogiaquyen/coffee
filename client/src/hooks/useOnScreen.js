import { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFaded, setHasFaded] = useState(false);

  useEffect(() => {
    if (hasFaded) return; // 🔥 Ngăn không cho chạy lại nếu đã fade out

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFaded) {
          setIsVisible(true);
          setHasFaded(true); // ✅ Đánh dấu đã fade để không chạy lại
          observer.disconnect(); // 🔥 Hủy observer sau khi chạy lần đầu
        }
      },
      { threshold: 0.1 } // Kích hoạt khi ít nhất 10% thẻ xuất hiện trên màn hình
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, hasFaded]); // 🔥 Thêm `hasFaded` để không kích hoạt lại

  return isVisible;
};

export default useOnScreen;
