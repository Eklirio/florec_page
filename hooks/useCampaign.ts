import { heroSlides } from '@/lib/content';

export function useCampaign() {
  return { active: heroSlides[0], all: heroSlides };
}
