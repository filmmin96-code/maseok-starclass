
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold text-navy text-xs">
          </div>
          <span className={`font-bold text-lg md:text-xl tracking-tighter ${isScrolled ? 'text-white' : 'text-white'}`}>
            마석역 극동스타클래스 <span className="text-gold">더 퍼스트</span>
          </span>
        </div>
        <a 
          href="#consult"
          className="hidden md:block bg-gold hover:bg-yellow-600 text-navy font-bold py-2 px-6 rounded-full transition-colors"
        >
          상담신청 바로가기
        </a>
      </div>
    </header>
  );
};

export default Header;
