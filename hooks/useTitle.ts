
import { useEffect } from 'react';

const useTitle = (title: string) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} | P Infotech Solutions`;
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export default useTitle;
