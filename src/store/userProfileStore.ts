import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from '../utils/storage';

export interface UserProfileState {
  photoUrl: string;
  name: string;
  id: string;
}

interface UserProfileStore {
  userProfile?: UserProfileState;
  setUserProfile: (userProfile: UserProfileState) => void;
}

export const useUserProfileStore = create<UserProfileStore>()(
  persist(
    set => ({
      userProfile: undefined,
      setUserProfile: userProfile => set({userProfile}),
    }),
    {
      name: 'userProfileStorage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
