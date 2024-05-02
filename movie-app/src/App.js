// App.js
import React, { useState } from 'react';
// import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Watchlist from './components/Watchlist';
import Sidebar from './components/Sidebar';
// import NavBar from './components/NavBar'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    // Simulate authentication (you can use local storage or state management library here)
    setUser({ email });
  };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
      <div className='flex justify-center'>
      {/* <NavBar /> */}
      {/* <Header user={user} handleLogout={handleLogout} /> */}
      <div >
      <Sidebar />
      <div>
        {!user ? (
          <>
            <Login handleLogin={handleLogin} />
            <SignUp handleLogin={handleLogin} />
          </>
        ) : (
          <Watchlist user={user} />
        )}
      </div>
      </div>
      </div>
  );
};

export default App;
