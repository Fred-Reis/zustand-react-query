import { useCallback } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetchRepos from "./queries/repo";
import { useFavoriteRepoStore } from "./store/useFavoriteRepos";

function App() {
  const { data } = useFetchRepos("Fred-Reis");

  const favoriteReposIds = useFavoriteRepoStore(
    (state) => state.favoriteReposIds
  );

  const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);

  const removeFromFavorites = useFavoriteRepoStore(
    (state) => state.removeFromFavorites
  );

  const handleAddToFavorites = useCallback(
    (repoId: number) => {
      addToFavorites(repoId);
    },
    [addToFavorites]
  );

  const handleRemoveFromFavorites = useCallback(
    (repoId: number) => {
      removeFromFavorites(repoId);
    },
    [removeFromFavorites]
  );

  return (
    <div>
      <h1>repos {favoriteReposIds.length}</h1>
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteReposIds.includes(repo.id)}
        />
      ))}
    </div>
  );
}

export default App;
