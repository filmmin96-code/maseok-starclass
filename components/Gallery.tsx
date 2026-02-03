
import React from 'react';

const galleryImages = [
  "https://i.ibb.co/4R3CcXj0/2026-02-03-10-16-23.png",
  "https://i.ibb.co/0jW3zxPY/2026-02-03-10-16-31.png",
  "https://i.ibb.co/39F0WBRS/2026-02-03-10-16-40.png",
  "https://i.ibb.co/mCZbpw9F/2026-02-03-10-16-49.png",
  "https://i.ibb.co/Nn2gZbT2/2026-02-03-10-16-57.png",
  "https://i.ibb.co/7Hxh4ch/2026-02-03-10-17-06.png",
  "https://i.ibb.co/BDhQ790/2026-02-03-10-17-11.png",
  "https://i.ibb.co/7dfDX066/2026-02-03-10-17-18.png",
  "https://i.ibb.co/gFm8BGkq/2026-02-03-10-17-24.png",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#00152e]">
      <div className="w-full px-4 md:px-10">
        {/* 타이틀 섹션 */}
        <div className="text-center mb-20">
          <h2 className="text-gold font-bold text-xl tracking-[0.3em] mb-4">PREMIUM GALLERY</h2>
          <p className="text-3xl md:text-5xl font-black text-white leading-tight">
            마석역 극동스타클래스 더 퍼스트만의 <span className="text-gold">프리미엄</span>
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-8"></div>
        </div>

        {/* 이미지 리스트 섹션: 무조건 1열(세로) 배치 */}
        <div className="flex flex-col gap-16 w-full">
          {galleryImages.map((src, idx) => (
            <div 
              key={idx} 
              className="w-full group"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 bg-navy/20">
                <img
                  src={src}
                  alt={`마석역 극동스타클래스 프리미엄 이미지 ${idx + 1}`}
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/premium-${idx}/1600/900`;
                  }}
                />
                {/* 오버레이 효과 */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 푸터 문구 */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm md:text-base font-light opacity-60">
            ※ 상기 이미지는 실제와 다를 수 있으며, 소비자의 이해를 돕기 위한 홍보물입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
