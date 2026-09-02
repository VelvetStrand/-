export type SocialStatus = 'عزباء' | 'مطلقة' | 'أرملة';

export type SortOption = 'default' | 'newest' | 'age-asc' | 'age-desc';

export interface Profile {
  id: number;
  name: string;
  age: number;
  city: string;
  socialStatus: SocialStatus;
  job: string;
  residence: string;
  bio: string;
  image: string;
  interests?: string[];
  education?: string;
  height?: string;
  lastActive?: string;
  isOnline?: boolean;
  verified?: boolean;
}
