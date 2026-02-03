
import React from 'react';

const LocationInfo: React.FC = () => {
  return (
    <section className="py-20 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              남양주가 기다려온<br />
              <span className="text-gold">압도적 입지의 주인공</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <h4 className="text-xl font-bold text-gold">도보 1분의 쾌속</h4>
                  <p className="text-gray-400 mt-1">마석역 신설 도로 예정으로 역까지 더욱 가까워지는 초역세권</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl shrink-0">🏙️</div>
                <div>
                  <h4 className="text-xl font-bold text-gold">도시개발의 중심</h4>
                  <p className="text-gray-400 mt-1">월산지구, 녹촌지구 등 약 1만여 세대급 배후 수요와 신주거 타운</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl shrink-0">🚀</div>
                <div>
                  <h4 className="text-xl font-bold text-gold">비규제 지역 프리미엄</h4>
                  <p className="text-gray-400 mt-1">청약 규제 완화 및 전매 가능으로 투자와 실거주를 동시에 만족</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gold rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://i.ibb.co/93sjJzL5/2026-02-03-6-37-33.png" 
              alt="Location Map" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute top-4 right-4 bg-navy px-4 py-2 rounded-lg border border-gold text-sm font-bold text-gold">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
