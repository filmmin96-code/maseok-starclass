
import React, { useState } from 'react';

const ConsultForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '59A',
    agree: false
  });

const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "891b8822-e068-44a4-900b-1e6ab5de71d6",
          subject: `[신규상담] ${formData.name}님`,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        // 메타 픽셀 상담 신청 추적 코드 시작
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }

        alert('상담 신청이 완료되었습니다. 조속히 연락드리겠습니다!');
        setFormData({ name: '', phone: '', type: '59A', agree: false });
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <section id="consult" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-navy p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-2">무료 상담 신청</h2>
            <p className="text-gold font-medium">잔여 세대 확인 및 모델하우스 방문 예약</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">성함</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                placeholder="성함을 입력하세요"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                placeholder="'-' 제외하고 입력 (예: 01012345678)"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">관심 평형</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, type: '59A'})}
                  className={`py-3 rounded-xl border-2 font-bold transition-all ${formData.type === '59A' ? 'bg-navy text-white border-navy' : 'bg-white text-gray-400 border-gray-100'}`}
                >
                  59A 타입
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, type: '59B'})}
                  className={`py-3 rounded-xl border-2 font-bold transition-all ${formData.type === '59B' ? 'bg-navy text-white border-navy' : 'bg-white text-gray-400 border-gray-100'}`}
                >
                  59B 타입
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <label className="flex items-center cursor-pointer space-x-3">
                <input 
                  type="checkbox" 
                  checked={formData.agree}
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  className="w-5 h-5 accent-navy"
                />
                <span className="text-sm text-gray-600">
                  <span className="font-bold underline">개인정보 수집 및 이용</span>에 동의합니다. (필수)
                </span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-gold hover:bg-yellow-600 text-navy font-black text-xl py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg"
            >
              상담 신청 완료
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">
              * 기입하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultForm;
