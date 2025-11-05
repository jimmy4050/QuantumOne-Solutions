import { useEffect } from 'react';

const useTitle = (title: string, description?: string, keywords?: string[]) => {
  useEffect(() => {
    // Title
    const originalTitle = document.title;
    document.title = `${title} | QuantumOne Solutions`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const originalKeywords = metaKeywords ? metaKeywords.getAttribute('content') : '';

    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    if (keywords && metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    return () => {
      document.title = originalTitle;
      if (description && metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      if (keywords && metaKeywords && originalKeywords) {
        metaKeywords.setAttribute('content', originalKeywords);
      }
    };
  }, [title, description, keywords]);
};

export default useTitle;
