import { defineStore } from 'pinia'
import type { Meditation } from '@/interfaces/meditation.interface.ts'
import { ref } from 'vue'


const store =defineStore('miditations', ()=>{
  const meditations = ref<Meditation[]>([]);




});
