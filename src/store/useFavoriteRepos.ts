import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStoreProps = {
  favoriteReposIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

export const useFavoriteRepoStore = create(
  persist<FavoriteRepoStoreProps>(
    (set) => ({
      favoriteReposIds: [],

      addToFavorites: (repoId: number) => {
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, repoId],
        }));
      },

      removeFromFavorites: (repoId: number) => {
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (id) => id !== repoId
          ),
        }));
      },
    }),
    {
      name: "repo-storage",
    }
  )
);
