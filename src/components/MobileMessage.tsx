"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const MobileMessage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const checkMobile = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    setIsMobile(isMobileDevice || isSmallScreen);
  }, []);

  useEffect(() => {
    checkMobile();
    
    // Throttled resize handler
    let timeoutId: NodeJS.Timeout;
    const throttledCheckMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 250);
    };

    window.addEventListener('resize', throttledCheckMobile, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', throttledCheckMobile);
    };
  }, [checkMobile]);

  const handleContinue = useCallback(() => {
    setIsVisible(false);
  }, []);

  const mobileIcon = useMemo(() => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ), []);

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border border-purple-500/30 rounded-2xl p-8 max-w-md mx-auto text-center shadow-2xl">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          {mobileIcon}
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Mobile Experience Coming Soon
        </h2>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We&apos;re currently optimizing our website for mobile devices. For the best experience, please visit us on a desktop or laptop computer.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={handleContinue}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Continue Anyway
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMessage;