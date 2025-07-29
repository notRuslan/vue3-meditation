import { defineStore } from 'pinia'
import type { Meditation } from '@/interfaces/meditation.interface.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'
import type { MeditationsResponse } from '@/interfaces/meditations.response.interface.ts'


export const useMeditationsStore =defineStore('miditations', ()=>{
  const meditations = ref<Meditation[]>([]);


  async function getMeditations(){
    const { data } = await http.get<MeditationsResponse>(API_ROUTES.meditations);
    console.log(data.data.meditations);
      meditations.value = data.data.meditations;
  }
  return {meditations, getMeditations}
});
