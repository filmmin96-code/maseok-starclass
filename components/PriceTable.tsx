
import React from 'react';

const PriceTable: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
            합리적인 <span className="text-gold">분양가 안내</span>
          </h2>
          <p className="text-gray-600">GTX-B 수혜 입지 대비 합리적인 가격 경쟁력</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden border border-gold/30 rounded-2xl shadow-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">층별 구분</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">예상 분양가 (최저)</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">예상 분양가 (최고)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              <tr>
                <td className="px-6 py-6 font-bold text-gray-700">저층 (1~5층)</td>
                <td className="px-6 py-6 text-gray-600">약 4억 7,000만 원</td>
                <td className="px-6 py-6 text-gray-600">약 4억 8,500만 원</td>
              </tr>
              <tr className="bg-gold/5">
                <td className="px-6 py-6 font-bold text-gray-700">중층 (6~15층)</td>
                <td className="px-6 py-6 text-gray-600">약 4억 8,800만 원</td>
                <td className="px-6 py-6 text-gray-600">약 4억 9,700만 원</td>
              </tr>
              <tr>
                <td className="px-6 py-6 font-bold text-gray-700">고층 (16층 이상)</td>
                <td className="px-6 py-6 text-gray-600">약 4억 9,900만 원</td>
                <td className="px-6 py-6 text-gray-600">약 5억 600만 원</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-100 p-4 text-center">
            <p className="text-sm text-gray-600">
              * 상기 분양가는 발코니 확장비 별도이며, 타입 및 층별에 따라 상이할 수 있습니다.<br />
              <span className="font-bold text-navy">상세 분양가 및 조건은 상담을 통해 확인 가능합니다.</span>
            </p>
          </div>
        </div>
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <img
              src="https://i.ibb.co/dwWBjtyK/2026-02-03-10-25-25.png"
              alt="분양가 상세 안내"
              className="w-full h-auto block"
            />
          </div>
        </div>
    </section>
  );
};

export default PriceTable;
