import React from 'react';
import { Search, MapPin, UserCheck, X, SlidersHorizontal } from 'lucide-react';
import { SocialStatus } from '../types';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}

const CITIES = [
  "الكل",
  "الرياض",
  "جدة",
  "الدمام",
  "مكة المكرمة",
  "المدينة المنورة",
  "الخبر",
  "الطائف",
  "تبوك",
  "أبها",
  "القصيم",
  "حائل",
  "جازان",
  "الأحساء",
  "الجبيل",
  "ينبع"
];

const STATUSES: { label: string; value: string }[] = [
  { label: "الجميع", value: "الكل" },
  { label: "عزباء", value: "عزباء" },
  { label: "مطلقة", value: "مطلقة" },
  { label: "أرملة", value: "أرملة" },
];

export const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  selectedCity,
  setSelectedCity,
  totalCount,
  filteredCount,
  onReset
}) => {
  const isFiltered = searchQuery !== '' || selectedStatus !== 'الكل' || selectedCity !== 'الكل';

  return (
    <div className="bg-[#F1EFE9] border border-[#C5A059]/25 rounded-2xl p-4 sm:p-5 shadow-xs mb-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-[#A19B91] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="ابحث بالاسم أو المدينة أو الوظيفة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#C5A059]/30 rounded-full pr-11 pl-4 py-2.5 text-sm sm:text-base text-[#2D241E] placeholder-[#A19B91] focus:outline-none focus:ring-2 focus:ring-[#1A4D2E]/20 focus:border-[#1A4D2E] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A19B91] hover:text-[#2D241E] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* City Filter Dropdown */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-52">
            <MapPin className="w-4 h-4 text-[#1A4D2E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-white border border-[#C5A059]/30 rounded-full pr-9 pl-3 py-2.5 text-sm text-[#2D241E] font-medium focus:outline-none focus:ring-2 focus:ring-[#1A4D2E]/20 focus:border-[#1A4D2E] transition-all appearance-none cursor-pointer"
            >
              {CITIES.map((city) => (
                <option key={city} value={city} className="bg-white text-[#2D241E]">
                  {city === "الكل" ? "📍 جميع المدن" : `📍 ${city}`}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Social Status Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-[#C5A059]/20">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
          <span className="text-xs text-[#6B5E4C] ml-2 shrink-0 font-bold">الحالة:</span>
          {STATUSES.map((status) => {
            const isActive = selectedStatus === status.value;
            return (
              <button
                key={status.value}
                onClick={() => setSelectedStatus(status.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A4D2E] text-white shadow-xs ring-1 ring-[#1A4D2E]'
                    : 'bg-white text-[#6B5E4C] border border-[#C5A059]/30 hover:bg-[#F9F7F2]'
                }`}
              >
                {status.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6B5E4C]">
          <span>
            عرض <strong className="text-[#1A4D2E] font-bold">{filteredCount}</strong> من أصل {totalCount}
          </span>
          {isFiltered && (
            <button
              onClick={onReset}
              className="text-xs text-[#C5A059] font-bold hover:text-[#a9833e] underline underline-offset-2 pr-2 border-r border-[#C5A059]/30 cursor-pointer"
            >
              إعادة ضبط الفلاتر
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
