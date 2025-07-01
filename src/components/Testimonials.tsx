'use client'
import { useEffect } from 'react';

export default function ElfsightReviews() {
  useEffect(() => {
    if (document.querySelector('script[src*="elfsight.com"]')) return;

    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const elfsightScript = document.querySelector('script[src*="elfsight.com"]');
      if (elfsightScript) {
        document.body.removeChild(elfsightScript);
      }
    };
  }, []);

  return (
    <div
      className="elfsight-app-5a07aabb-6ec1-43bd-bafb-53d227bccd3f bg-cover bg-center bg-no-repeat p-8 text-xl sm:text-2xl"
      data-elfsight-app-lazy
      style={{
        backgroundImage: 'url("/testimonial-banner.png")',
        overflow: 'hidden',
        minHeight: '300px'
      }}
    >
      <style>
        {`
          @media (max-width: 640px) {
            .jYSehp {
              font-size: 25px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
