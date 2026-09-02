import React, { useState } from 'react';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Profile } from '../types';
import { triggerContentLocker } from '../utils/locker';

interface ProfileCardProps {
  profile: Profile;
  onOpenModal: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onOpenModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerContentLocker();
  };

  return (
    <div
      onClick={() => onOpenModal(profile)}
      className="profile-card bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center cursor-pointer justify-between group"
    >
      <div className="w-full flex flex-col items-center">
        {/* Circular Avatar Container */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full border-4 border-[#F1EFE9] group-hover:border-[#C5A059]/40 overflow-hidden mb-2.5 shadow-inner transition-colors">
          {/* Placeholder shimmer */}
          {!imageLoaded && !imgError && (
            <div className="absolute inset-0 img-placeholder" />
          )}

          <img
            src={profile.image}
            alt={profile.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImgError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Online status indicator dot */}
          {profile.isOnline && (
            <span
              className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"
              title="متصلة الآن"
            />
          )}
        </div>

        {/* Verified badge if verified */}
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <h3 className="font-bold text-base sm:text-lg text-[#1A4D2E] font-['Noto_Kufi_Arabic','Cairo',sans-serif]">
            {profile.name}
          </h3>
          {profile.verified && (
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A4D2E] shrink-0" title="ملف موثق" />
          )}
        </div>

        {/* Age and City */}
        <p className="text-xs sm:text-sm text-[#6B5E4C] font-medium mb-1.5">
          {profile.age} سنة • {profile.city}
        </p>

        {/* Social Status Badge */}
        <span className="text-[11px] bg-[#F1EFE9] text-[#1A4D2E] px-2.5 py-0.5 rounded-full font-bold mb-2">
          {profile.socialStatus}
        </span>

        {/* Job summary */}
        <p className="text-[11px] sm:text-xs text-[#6B5E4C] line-clamp-1 mb-3">
          💼 {profile.job}
        </p>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsappClick}
        className="w-full bg-[#1A4D2E] text-white py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 hover:bg-[#143d25] active:scale-[0.98] transition-colors shadow-sm cursor-pointer"
      >
        <span>💚</span>
        <span>واتساب</span>
      </button>
    </div>
  );
};

