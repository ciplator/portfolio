import { useEffect } from 'react';

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку
    } else {
      document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    }

    // Очистка эффекта при размонтировании
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

export default useBodyScrollLock;
