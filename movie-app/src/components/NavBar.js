import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Watchlist from "./Watchlist";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="mx-auto w-11/12 border p-5 my-4 rounded-md border-orange-700">
        <h2
          id="speakers-title"
          className="font-display text-4xl font-medium tracking-tighter sm:text-5xl"
        >
          Welcome to <span classNameName="text-red-600">Watchlists</span>
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight">
          Browse movies, add them to watchlists and share them with friends
        </p>
        <p className="mt-4 font-display text-2xl tracking-tight">
          Just Click the + to add a movie, the poster to see the more details to mark the movie as watched
        </p>
      </div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}  />
      <div className="flex flex-wrap items-center justify-between">
        <Watchlist searchValue={searchValue} />
      </div>
    </div>
  );
};

export default NavBar;
