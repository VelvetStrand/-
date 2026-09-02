import React from 'react';
import { Heart, Sparkles, ShieldCheck, MapPin, Users } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white border-b border-[#C5A059]/25 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-center shadow-xs z-20">
      <div className="relative max-w-4xl mx-auto">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A4D2E]/10 border border-[#1A4D2E]/20 text-[#1A4D2E] text-xs sm:text-sm font-semibold mb-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A4D2E]"></span>
          </span>
          <span className="flex items-center gap-1">
            <span>🇸🇦</span> المملكة العربية السعودية • منصة التعارف الجاد والزواج
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A4D2E] tracking-tight mb-2 font-['Noto_Kufi_Arabic','Cairo',sans-serif] leading-snug flex items-center justify-center gap-2">
          <span>💍</span>
          <span>زواج وتعارف السعودية</span>
        </h1>

        {/* Subtitles */}
        <p className="text-sm sm:text-base text-[#6B5E4C] font-medium mb-3 max-w-2xl mx-auto leading-relaxed">
          تعرّف على سيدات يبحثن عن شريك حياة مناسب في بيئة محافظة ومحترمة
        </p>

        {/* Instructions Banner */}
        <div className="inline-flex items-center gap-2 bg-[#F1EFE9] border border-[#C5A059]/30 rounded-full px-4 py-1.5 text-xs sm:text-sm text-[#1A4D2E] font-semibold">
          <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>اختر الملف المناسب لك واضغط على الصورة لمعرفة المزيد</span>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto mt-5 text-xs sm:text-sm text-[#6B5E4C]">
          <div className="flex items-center justify-center gap-1.5 bg-[#F9F7F2] border border-[#C5A059]/20 rounded-xl py-2 px-2">
            <ShieldCheck className="w-4 h-4 text-[#1A4D2E] shrink-0" />
            <span className="font-semibold text-[#2D241E]">سرية وأمان تام</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-[#F9F7F2] border border-[#C5A059]/20 rounded-xl py-2 px-2">
            <Users className="w-4 h-4 text-[#1A4D2E] shrink-0" />
            <span className="font-semibold text-[#2D241E]">+50 ملف متاح</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-[#F9F7F2] border border-[#C5A059]/20 rounded-xl py-2 px-2">
            <Heart className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span className="font-semibold text-[#2D241E]">توافق جاد</span>
          </div>
        </div>
      </div>
    </header>
  );
};

