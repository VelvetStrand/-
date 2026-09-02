import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-white border-t border-[#C5A059]/25 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Main Message */}
        <p className="text-sm sm:text-base text-[#1A4D2E] font-bold flex items-center justify-center gap-2">
          <span>❤️</span>
          <span>هدفنا تسهيل التعارف الجاد وبناء علاقات تنتهي بالزواج الشرعي.</span>
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-[#6B5E4C]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#1A4D2E]" />
            بيئة محترمة وآمنة
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#1A4D2E]" />
            حماية الخصوصية
          </span>
          <span className="flex items-center gap-1.5">
            <span>🇸🇦</span>
            مخصص للمملكة العربية السعودية
          </span>
        </div>

        {/* Mandatory Legal & Experimental Disclaimer */}
        <div className="pt-3 border-t border-[#F1EFE9] text-xs text-[#A19B91] max-w-xl mx-auto leading-relaxed">
          <p className="mb-1.5 text-[11px]">
            هذا الموقع مخصص لعرض ملفات تعريفية للتعارف، والمعلومات المعروضة قد تكون لأغراض تجريبية.
          </p>
          <p className="text-[10px]">
            © {new Date().getFullYear()} زواج وتعارف السعودية. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
};

