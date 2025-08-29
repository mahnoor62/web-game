// src/components/BackgroundVideo.jsx
'use client';

import { useEffect, useState } from 'react';

function getViewportSize() {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  const vv = window.visualViewport; // mobile-safe viewport if available
  return {
    width: Math.round(vv ? vv.width : window.innerWidth),
    height: Math.round(vv ? vv.height : window.innerHeight),
  };
}

export default function BackgroundVideo() {
  const [size, setSize] = useState(getViewportSize());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onResize = () => setSize(getViewportSize());

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize);
    }

    // initial sync
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', onResize);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        width={size.width}
        height={size.height}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          objectFit: 'cover',
        }}
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
    </div>
  );
}
