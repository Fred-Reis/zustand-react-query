import { Repo } from "@/queries/repo/types";
import "./styles.css";

type CardProps = {
  repo: Repo;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: boolean;
};

export default function Card({
  repo,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: CardProps) {
  function handleFavorites() {
    isFavorite ? removeFromFavorites(repo.id) : addToFavorites(repo.id);
  }

  return (
    <div className={`card`}>
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleFavorites}>
          {isFavorite ? "Remove from favorites" : "Add to Favorites"}{" "}
        </button>
        {/* <button onClick={handleDeleteTodo}>Deletar</button> */}
      </div>
    </div>
  );
}
