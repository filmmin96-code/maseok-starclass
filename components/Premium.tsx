
import React from 'react';

const premiums = [
  {
    icon: "🚆",
    title: "GTX-B 시점역 프리미엄",
    desc: "2030년 개통 시 서울역 27분, 청량리 20분대 쾌속 진입"
  },
  {
    icon: "🏃",
    title: "마석역 도보 1분",
    desc: "약 150m 초역세권으로 출퇴근 시간이 즐거워지는 입지"
  },
  {
    icon: "🛒",
    title: "완성된 인프라",
    desc: "롯데마트, 하나로마트, 병원 등 이미 갖춰진 편리한 생활"
  },
  {
    icon: "🏫",
    title: "안심 학세권",
    desc: "마석초·중, 심석중·고교 도보 통학이 가능한 우수한 교육"
  },
  {
    icon: "🚗",
    title: "광역 교통망",
    desc: "수도권 제2순환도로 개통 및 경춘로, 서울-양양 고속도로 인접"
  },
  {
    icon: "📈",
    title: "높은 미래가치",
    desc: "녹촌·월산지구 도시개발구역 추진으로 기대되는 동반 상승"
  }
];

const Premium: React.FC = () => {
  return (
    <>
      {/* 사업개요 섹션 */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              <span className="text-gold">사업개요</span> 안내
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="max-w-full mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10 px-4 md:px-10">
            <img 
              src="https://i.ibb.co/Fb9Xm9HG/gaeyo.png" 
              alt="사업개요" 
              className="w-full h-auto block"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Project+Overview';
              }}
            />
          </div>
        </div>
      </section>

      {/* 프리미엄 6가지 강조 섹션 */}
      <section id="premium" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              마석역 극동스타클래스만의 <span className="text-gold">6가지 프리미엄</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiums.map((p, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-50 flex flex-col items-center text-center">
                <div className="text-4xl mb-4 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-inner">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Premium;
