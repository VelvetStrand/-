import React, { useState, useMemo } from 'react';
import { PROFILES_DATA } from './data/profiles';
import { Profile, SortOption } from './types';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { ProfileCard } from './components/ProfileCard';
import { ProfileModal } from './components/ProfileModal';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ChevronDown, Sparkles, Heart, SearchX } from 'lucide-react';
import { triggerContentLocker } from './utils/locker';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('الكل');
  const [selectedCity, setSelectedCity] = useState('الكل');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // Filter profiles based on search query, city, and social status
  const filteredProfiles = useMemo(() => {
    return PROFILES_DATA.filter((profile) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        profile.name.includes(searchQuery.trim()) ||
        profile.city.includes(searchQuery.trim()) ||
        profile.job.includes(searchQuery.trim()) ||
        profile.bio.includes(searchQuery.trim());

      const matchesStatus =
        selectedStatus === 'الكل' || profile.socialStatus === selectedStatus;

      const matchesCity =
        selectedCity === 'الكل' || profile.city === selectedCity;

      return matchesSearch && matchesStatus && matchesCity;
    });
  }, [searchQuery, selectedStatus, selectedCity]);

  // Sort filtered profiles based on selected sorting option
  const sortedProfiles = useMemo(() => {
    const list = [...filteredProfiles];
    switch (sortBy) {
      case 'newest':
        // Higher ID corresponds to newer entries
        return list.sort((a, b) => b.id - a.id);
      case 'age-asc':
        // Youngest to oldest
        return list.sort((a, b) => a.age - b.age);
      case 'age-desc':
        // Oldest to youngest
        return list.sort((a, b) => b.age - a.age);
      case 'default':
      default:
        return list.sort((a, b) => a.id - b.id);
    }
  }, [filteredProfiles, sortBy]);

  // Sliced profiles for progressive loading
  const displayedProfiles = useMemo(() => {
    return sortedProfiles.slice(0, visibleCount);
  }, [sortedProfiles, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, sortedProfiles.length));
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedStatus('الكل');
    setSelectedCity('الكل');
    setSortBy('default');
    setVisibleCount(16);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D241E] flex flex-col selection:bg-[#1A4D2E] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6">
        
        {/* Filters Section */}
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            setVisibleCount(16);
          }}
          selectedStatus={selectedStatus}
          setSelectedStatus={(s) => {
            setSelectedStatus(s);
            setVisibleCount(16);
          }}
          selectedCity={selectedCity}
          setSelectedCity={(c) => {
            setSelectedCity(c);
            setVisibleCount(16);
          }}
          sortBy={sortBy}
          setSortBy={(s) => {
            setSortBy(s);
            setVisibleCount(16);
          }}
          totalCount={PROFILES_DATA.length}
          filteredCount={sortedProfiles.length}
          onReset={handleResetFilters}
        />

        {/* Profiles Grid */}
        {displayedProfiles.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
              {displayedProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onOpenModal={(p) => setSelectedProfile(p)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < sortedProfiles.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white active:scale-95 font-bold px-8 py-3 rounded-full shadow-xs transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>عرض المزيد من الملفات ({sortedProfiles.length - visibleCount} متبقية)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-[#C5A059]/30 rounded-3xl p-8 sm:p-12 text-center max-w-md mx-auto my-8 shadow-xs">
            <SearchX className="w-12 h-12 text-[#A19B91] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1A4D2E] mb-2">لم يتم العثور على نتائج</h3>
            <p className="text-sm text-[#6B5E4C] mb-5">
              جرب تغيير معايير البحث أو تصفية المدن والحالات الاجتماعية للعثور على ملفات مناسبة.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-[#1A4D2E] hover:bg-[#143d25] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              عرض جميع الملفات
            </button>
          </div>
        )}

        {/* Call to Action Section */}
        <CtaSection />
      </main>

      {/* Profile Detail Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
