
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-black tracking-tighter mb-2">마석역 극동스타클래스 <span className="text-gold">더 퍼스트</span></h3>
            <p className="text-gray-400 text-sm">최고의 가치와 신뢰로 보답합니다.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>사업개요</span>
            <span>오시는길</span>
            <span>관심고객등록</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-8">
          <div>
            <p>• 사업지: 경기도 남양주시 화도읍 마석우리 251외 1필지</p>
            <p>• 규모: 지하 4층 ~ 지상 최고 25층, 총 138세대 및 근린생활시설</p>
            <p>• 시공사: 극동건설(주) | 시행: (주)대한토지신탁(수탁)</p>
          </div>
          <div>
            <p>※ 본 페이지에 사용된 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로 실제 시공 시 변경될 수 있습니다.</p>
            <p>※ GTX-B 노선 및 주변 도시개발 계획은 관련 기관의 사정에 따라 지연되거나 변경될 수 있습니다.</p>
            <p className="mt-4">Copyright © 2024 마석역 극동스타클래스 더 퍼스트. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
