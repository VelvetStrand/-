import React, { useEffect } from 'react';
import { X, MapPin, Briefcase, Home, GraduationCap, CheckCircle2, Ruler, Sparkles } from 'lucide-react';
import { Profile } from '../types';
import { triggerContentLocker } from '../utils/locker';

interface ProfileModalProps {
  profile: Profile | null;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (profile) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [profile, onClose]);

  if (!profile) return null;

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerContentLocker();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative text-right flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/30 rounded-full text-white text-xl transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          &times;
        </button>

        {/* Gradient Header Banner & Overlapping Avatar */}
        <div className="h-36 sm:h-44 w-full bg-gradient-to-b from-[#1A4D2E] to-[#C5A059] relative shrink-0">
          <div className="absolute top-3 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
            {profile.isOnline ? '🟢 متصلة الآن' : 'نشطة مؤخراً'}
          </div>

          <img
            src={profile.image}
            alt={profile.name}
            className="absolute bottom-[-32px] right-6 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg object-cover bg-white"
          />
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto overflow-x-hidden p-6 sm:p-7 pt-11 space-y-4">
          
          {/* Header Info (Name, Meta, Status) */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-2xl font-bold text-[#1A4D2E] font-['Noto_Kufi_Arabic','Cairo',sans-serif]">
                  {profile.name}
                </h2>
                {profile.verified && (
                  <CheckCircle2 className="w-4 h-4 text-[#1A4D2E]" title="ملف موثق" />
                )}
              </div>
              <p className="text-sm text-[#6B5E4C] font-semibold mt-0.5">
                {profile.age} سنة • {profile.city}
              </p>
            </div>
            <span className="bg-[#F1EFE9] text-[#1A4D2E] px-3.5 py-1 rounded-full text-xs font-bold">
              {profile.socialStatus}
            </span>
          </div>

          {/* Bio Section */}
          <div className="bg-[#F9F7F2] border border-[#C5A059]/20 rounded-2xl p-4">
            <label className="text-[10px] uppercase tracking-wider text-[#A19B91] block font-bold mb-1">
              نبذة تعريفية ومواصفات شريك الحياة:
            </label>
            <p className="text-sm text-[#2D241E] leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 gap-3 border-t border-dashed border-[#C5A059]/25 pt-3">
            <div className="bg-[#F9F7F2] rounded-xl p-2.5">
              <label className="text-[10px] text-[#A19B91] block font-semibold">💼 العمل / المهنة</label>
              <p className="text-xs font-bold text-[#2D241E] mt-0.5">{profile.job}</p>
            </div>
            <div className="bg-[#F9F7F2] rounded-xl p-2.5">
              <label className="text-[10px] text-[#A19B91] block font-semibold">🏠 السكن الحالي</label>
              <p className="text-xs font-bold text-[#2D241E] mt-0.5">{profile.residence}</p>
            </div>
          </div>

          {/* Additional details (Education / Height) */}
          <div className="flex flex-wrap gap-2 text-xs">
            {profile.education && (
              <span className="bg-[#F1EFE9] border border-[#C5A059]/20 px-3 py-1 rounded-lg text-[#6B5E4C] font-medium flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#1A4D2E]" />
                {profile.education}
              </span>
            )}
            {profile.height && (
              <span className="bg-[#F1EFE9] border border-[#C5A059]/20 px-3 py-1 rounded-lg text-[#6B5E4C] font-medium flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-[#C5A059]" />
                الطول: {profile.height}
              </span>
            )}
          </div>

          {/* Interests Pills */}
          {profile.interests && profile.interests.length > 0 && (
            <div>
              <span className="text-xs text-[#A19B91] font-semibold block mb-1.5">الاهتمامات:</span>
              <div className="flex flex-wrap gap-1.5">
                {profile.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F9F7F2] border border-[#C5A059]/20 text-[#6B5E4C] text-xs px-2.5 py-1 rounded-lg"
                  >
                    ✨ {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom CTA Action */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#C5A059]/20 flex flex-col gap-2">
          <button
            onClick={handleWhatsappClick}
            className="w-full bg-[#1A4D2E] hover:bg-[#143d25] active:scale-[0.98] text-white py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-[#1A4D2E]/20 transition-colors cursor-pointer"
          >
            <span>📱</span>
            <span>الحصول على رقم الواتساب</span>
          </button>
          <p className="text-center text-[11px] text-[#A19B91]">
            🔒 اضغط أعلاه لفتح وسيلة الاتصال والتواصل المباشر والجاد
          </p>
        </div>

      </div>
    </div>
  );
};
