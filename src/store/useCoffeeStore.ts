import {API_BASE_URL} from '@env';
import {create} from 'zustand';

type CoffeeItem = {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: string | null;
  flavor_profile: Array<string>;
  grind_option: Array<string>;
  roast_level: number | null;
  image_url: string;
};

type CoffeeItemsStore = {
  items: CoffeeItem[];
  filterString: string;
  loading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
  setFilterString: (filter: string) => void;
};

export const useCoffeeItemsStore = create<CoffeeItemsStore>(set => ({
  items: [],
  loading: false,
  error: null,
  filterString: '',

  fetchItems: async () => {
    set({loading: true, error: null});
    try {
      const response = await fetch(API_BASE_URL as string);
      const result = await response.json();
      set({items: result, loading: false});
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        loading: false,
      });
    }
  },

  setFilterString: filter => {
    set({filterString: filter});
  },
}));
