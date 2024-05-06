import React from "react";

const Watchlist = () => {
  return (
    <div class="relative m-3 flex w-full max-w-56 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a class="relative flex h-60 overflow-hidden " href="#">
        <img
          class="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <span class="absolute top-0 left-0 p-1 bg-black text-center text-sm font-medium text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </a>
      <div class=" px-2 pb-5">
        <div class="flex items-end justify-end mt-1">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="pl-2">
              <span class="text-1xl font-bold">68 </span>
              <span class="text-xs text-slate-900">/ 100</span>
            </p>
          </div>
        </div>
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900">Top Gun:</h5>
          <h5 class="text-xl tracking-tight text-slate-900">Maverick</h5>
          <h5 class="text-xl tracking-tight text-gray-300">(2022)</h5>
        </a>
      </div>
    </div>
  );
};

export default Watchlist;
