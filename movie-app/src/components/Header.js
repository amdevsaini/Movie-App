const Header = ({ user, handleLogout }) => {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl">Movie Watchlist App</h1>
      {user && (
        <button className="bg-white text-blue-500 px-4 py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
