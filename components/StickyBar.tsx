
import React from 'react';

const StickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] flex md:hidden h-16 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:010-5503-5606" 
        className="flex-1 bg-white text-navy font-black flex items-center justify-center space-x-2 border-t border-gray-100"
      >
        <span className="text-xl">📞</span>
        <span>전화상담</span>
      </a>
      <a 
        href="#consult" 
        className="flex-[1.5] bg-gold text-navy font-black flex items-center justify-center space-x-2"
      >
        <span className="text-xl">✍️</span>
        <span>[즉시입주]상담신청하기</span>
      </a>
    </div>
  );
};

export default StickyBar;
