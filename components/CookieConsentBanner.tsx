import React, { useState, useEffect } from 'react';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // Use a small delay to prevent layout shift and allow a smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', String(consent));
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 z-[100] transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      aria-hidden={!isVisible}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-300 text-center sm:text-left">
          We use cookies to enhance your browsing experience. By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex-shrink-0 flex gap-3">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors"
            aria-label="Decline cookies"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-primary hover:bg-primary/90 transition-colors"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
