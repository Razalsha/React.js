// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Post from './Pages/Post';
// import Login from './Pages/Login';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Post from './Pages/Post';
import Login from './Pages/Login';
import { auth } from './config/firebase';  // Import Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  // Track the user’s authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // User is signed in
      } else {
        setUser(null);  // User is signed out
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} />  {/* Pass the user state to the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} /> {/* Pass user and setUser to Login */}
      </Routes>
    </Router>
  );
}

export default App;
