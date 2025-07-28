import { defineStore } from 'pinia'
import type { Meditation } from '@/interfaces/meditation.interface.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'


const store =defineStore('miditations', ()=>{
  const meditations = ref<Meditation[]>([]);


  async function getMeditations(){
    const { data } = await http.get<Meditation[]>(API_ROUTES.meditations);
      meditations.value = data;
  }
});
