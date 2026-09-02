import React from 'react';
import { Heart } from 'lucide-react';
import { triggerContentLocker } from '../utils/locker';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative my-10 max-w-5xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#C5A059]/25 p-6 sm:p-10 text-center shadow-xs">
        <div className="relative max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1EFE9] border border-[#C5A059]/25 text-[#1A4D2E] text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>خطوتك الأولى نحو الاستقرار والزواج</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A4D2E] font-['Noto_Kufi_Arabic','Cairo',sans-serif] leading-tight">
            💍 هل وجدت شريكة الحياة المناسبة؟
          </h2>

          <p className="text-[#6B5E4C] text-sm sm:text-base leading-relaxed">
            اطّلع على التفاصيل واضغط على الحصول على رقم الواتساب للتواصل المباشر والجاد.
          </p>

          <div className="pt-2">
            <button
              onClick={triggerContentLocker}
              className="inline-flex items-center justify-center gap-2 bg-[#1A4D2E] hover:bg-[#143d25] active:scale-95 text-white text-base sm:text-lg font-bold py-3.5 px-8 rounded-full shadow-md shadow-[#1A4D2E]/20 transition-all cursor-pointer"
            >
              <span>📱</span>
              <span>الحصول على رقم الواتساب والتواصل الآن</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

