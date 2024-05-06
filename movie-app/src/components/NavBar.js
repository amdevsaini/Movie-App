import SearchBar from "./SearchBar";
import Watchlist from "./Watchlist";

const NavBar = () => {
  return (
    <div class="flex flex-col flex-1 overflow-y-auto">
      <div class="mx-auto w-11/12 border p-5 my-4 rounded-md border-orange-700">
        <h2
          id="speakers-title"
          class="font-display text-4xl font-medium tracking-tighter sm:text-5xl"
        >
          Welcome to <span className="text-red-600">Watchlists</span>
        </h2>
        <p class="mt-4 font-display text-2xl tracking-tight">
          Browse movies, add them to watchlists and share them with friends
        </p>
        <p class="mt-4 font-display text-2xl tracking-tight">
          Just Click the + to add a movie, the poster to see the more details to mark the movie as watched
        </p>
      </div>
      <SearchBar />
      <div class="flex flex-wrap items-center justify-between">
        <Watchlist />
        <Watchlist />
        <Watchlist />
        <Watchlist />
        <Watchlist />
        <Watchlist />
        <Watchlist />
        <Watchlist />
      </div>
    </div>
  );
};

export default NavBar;
