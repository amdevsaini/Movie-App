import React, { useState, useEffect } from "react";

function convertSpacesToPlus(value) {
  const convertedURL = value.replace(" ", '+');
  return convertedURL;
}

const Watchlist = ({searchValue}) => {
  const [movieData, setMovieData] = useState(null);

  // Fetch movie data from OMDb API on component mount
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?s=Avengers&apikey=350d7334&page=1");
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);


  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const updateValue = convertSpacesToPlus(searchValue);
        const response = await fetch(`http://www.omdbapi.com/?t=${updateValue}&apikey=350d7334&page=1`);
        console.log("+++++++++++", response);
        const data = await response.json();
        data['Search'] = [data];
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [searchValue]);

  // Function to truncate movie title
  const truncateTitle = (title) => {
    if (title.length > 15) {
      return title.slice(0, 15) + "...";
    }
    return title;
  };

  return (
    <div className="flex flex-wrap justify-center">
      {movieData && movieData.Response === "True" ?  movieData.Search.map((movie) => (
        <div key={movie.imdbID} className="relative m-3 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a className="relative flex h-60 overflow-hidden" href="#">
            <img
              className="object-cover"
              src={movie.Poster || "https://via.placeholder.com/150"}
              alt="movie poster"
            />
            <span className="absolute top-0 left-0 p-1 bg-black text-center text-sm font-medium text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </a>
          <div className="px-2 pb-5">
            <div className="flex items-end justify-end mt-1">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                  />
                </svg>
                <p className="pl-2">
                  <span className="text-1xl font-bold">{movie.imdbRating} </span>
                  <span className="text-xs text-slate-900">/ 100</span>
                </p>
              </div>
            </div>
            <a href="#" title={movie.Title}>
              <h5 className="text-xl tracking-tight text-slate-900">{truncateTitle(movie.Title)}</h5>
              <h5 className="text-xl tracking-tight text-gray-300">({movie.Year})</h5>
            </a>
          </div>
        </div>
      )) : 
      <div className="flex justify-center mx-4 items-center h-10 text-red-700 text-3xl">No Movie found</div>}
    </div>
  );
};

export default Watchlist;
