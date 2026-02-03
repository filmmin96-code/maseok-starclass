
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/prspdMn0/main.jpg" 
          alt="Building Landscape" 
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            // 로컬 이미지가 없거나 경로가 틀릴 경우를 대비한 대체 이미지 처리
            (e.target as HTMLImageElement).src = 'https://picsum.photos/id/122/1600/900';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 bg-gold text-navy font-bold text-sm mb-6 rounded">
            GTX-B 마석역 초역세권 프리미엄
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            서울역까지 <span className="text-gold">단 27분</span><br />
            마석역 <span className="text-gold">도보 1분</span>의 가치<br />
            즉시 입주 가능!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            GTX-B 시점역 프리미엄과 남양주 신주거 중심의 만남.<br className="hidden md:block" />
            단 138세대, 전매 가능한 비규제 지역의 마지막 기회를 잡으세요.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#consult"
              className="px-8 py-5 bg-gold text-navy font-black text-xl rounded-xl shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:scale-105 transition-transform animate-pulse text-center"
            >
              지금 상담 신청하기
            </a>
            <div className="flex items-center justify-center md:justify-start text-white space-x-3 mt-4 md:mt-0">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-sm font-medium">잔여 세대 선착순 문의 중</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Slope */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-slant"></div>
    </section>
  );
};

export default Hero;
