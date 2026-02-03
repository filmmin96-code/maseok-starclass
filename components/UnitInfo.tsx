
import React, { useState } from 'react';

const UnitInfo: React.FC = () => {
  const [activeType, setActiveType] = useState<'A' | 'B'>('A');

  const unitData = {
    A: {
      title: '59A 타입',
      units: '총 92세대',
      mainImg: 'https://i.ibb.co/zhZ93K7Y/4a.jpg',
      serviceImg: 'https://i.ibb.co/s9Xgt6x4/5a2.png',
      desc: '판상형 3Bay 구조의 정석\n남향 배치로 채광 극대화',
      area: {
        exclusive: '59.98㎡',
        supply: '81.35㎡',
        actual: '약 94㎡'
      }
    },
    B: {
      title: '59B 타입',
      units: '총 46세대',
      mainImg: 'https://i.ibb.co/Q3wnBmgk/4b.jpg',
      serviceImg: 'https://i.ibb.co/HpP6rGBJ/5b2.png',
      desc: '판상형 3Bay 구조의 정석\n동향 배치로 탁 트인 조망권 확보',
      area: {
        exclusive: '59.97㎡',
        supply: '81.62㎡',
        actual: '약 95㎡'
      }
    }
  };

  const current = unitData[activeType];

  return (
    <section className="py-24 bg-[#00152e] text-white" id="type">
      <div className="container mx-auto px-4">
        {/* 1. 핵심 카피 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-relaxed">
            "59㎡ 평형대의 <span className="text-gold">경제성</span>,<br />
            84㎡ 평형대 이상의 <span className="text-gold">공간감</span>"
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            압도적인 <span className="text-gold font-bold">서비스 면적</span>으로 완성된 혁신 평면
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8"></div>
        </div>

        {/* 2. 배치도 섹션 추가 */}
        <div className="mb-24">
          <div className="flex flex-col gap-12">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gold">단지 배치도</h3>
              <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img 
                  src="https://i.ibb.co/gbg0Tp6j/3baechido.jpg" 
                  alt="단지 배치도" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gold">동호수 배치도</h3>
              <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img 
                  src="https://i.ibb.co/YT1bFtn6/baechido.png" 
                  alt="동호수 배치도" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. 타입 선택 탭 */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex p-1 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 mb-8">
            <button
              onClick={() => setActiveType('A')}
              className={`px-10 py-3 rounded-xl font-bold text-lg transition-all ${
                activeType === 'A' 
                ? 'bg-gold text-navy shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              59A TYPE
            </button>
            <button
              onClick={() => setActiveType('B')}
              className={`px-10 py-3 rounded-xl font-bold text-lg transition-all ${
                activeType === 'B' 
                ? 'bg-gold text-navy shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              59B TYPE
            </button>
          </div>
          <div className="text-center mb-12">
            <p className="text-2xl md:text-4xl font-black text-gold mb-3">
              {current.units}
            </p>
            <p className="text-lg md:text-xl text-white font-bold leading-relaxed opacity-90">
              3Bay 판상형 맞 통풍 구조, 방 3개, 욕실 2개,<br className="md:hidden" />
              ㄱ자형 주방, 붙박이장 등 제공
            </p>
          </div>
        </div>

        {/* 4. 평면도 카드 영역 */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* 일반 평면도 카드 */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col h-full border border-gray-100 group">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-navy font-black text-xl">기본 평면도</span>
              <span className="bg-navy/10 text-navy text-xs px-3 py-1 rounded-full font-bold">59{activeType}</span>
            </div>
            
            <div className="h-[250px] md:h-[400px] w-full mb-6 overflow-hidden flex items-center justify-center">
              <img
                src={current.mainImg}
                alt={`${current.title} 일반 평면도`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-auto">
              <div className="bg-gray-50 p-4 rounded-2xl mb-4 border border-gray-100">
                <p className="text-[#00152e] font-medium text-lg leading-relaxed whitespace-pre-line text-center">{current.desc}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-center">
                <div>
                  <p className="text-[10px] text-[#00152e]/70 mb-1">전용면적</p>
                  <p className="text-sm font-bold text-[#00152e]">{current.area.exclusive}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#00152e]/70 mb-1">공급면적</p>
                  <p className="text-sm font-bold text-[#00152e]">{current.area.supply}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#00152e]/70 mb-1">실사용(전용+발코니)</p>
                  <p className="text-sm font-black text-gold">{current.area.actual}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 서비스 면적 안내 카드 */}
          <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col h-full border-2 border-gold/30 relative group">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-navy font-black text-xl">서비스 면적 안내</span>
            </div>

            <div className="h-[250px] md:h-[400px] w-full mb-6 overflow-hidden flex items-center justify-center">
              <img
                src={current.serviceImg}
                alt={`${current.title} 서비스면적 안내`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-auto text-center space-y-4">
              <div className="bg-gold/5 p-4 rounded-2xl border border-gold/10">
                <p className="text-gold font-black text-xl">발코니 확장 등 넓은 서비스 면적 제공</p>
                <p className="text-[#00152e] text-xs mt-1 font-medium">※ 붉은색 표시 영역이 서비스 면적입니다.</p>
              </div>
              <p className="text-[#00152e] text-[10px]">※ 인허가 과정에 따라 다소 변경될 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 하단 유의사항 */}
        <div className="mt-20 max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            ※ 본 홍보물의 평면도 및 이미지는 소비자의 이해를 돕기 위한 예시이며 실제 시공 시 다소 변경될 수 있습니다.<br />
            ※ 실사용 면적은 발코니 확장 시 제공되는 면적을 포함한 수치이며, 동호수 및 층별로 차이가 있을 수 있습니다.<br />
            ※ 자세한 수치와 조건은 모델하우스 방문 및 분양공고문을 통해 반드시 재확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnitInfo;
