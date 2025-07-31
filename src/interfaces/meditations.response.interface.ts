import type { Meditation } from '@/interfaces/meditation.interface.ts'

export interface MeditationsResponse {
  data: {
    meditations: Meditation[];
  };
  status: string;
}
