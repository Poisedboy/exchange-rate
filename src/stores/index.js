import { defineStore } from 'pinia';
import {ServiceAPI} from '../monoAPI/serviceAPI';

export const useStore = defineStore({
  id: 'currency',
  state: () => ({
    currencies: [] 
  }),
  getters: {
    getCurrencies: (state) => state.currencies
  },
  actions: {
    async getData() {
      const { requestData } = ServiceAPI();
      const data = await requestData();
      this.currencies = data;
    }
  }
})
