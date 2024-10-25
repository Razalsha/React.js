// import React, { useState } from 'react';
// import { auth, provider, signInWithPopup } from '../config/firebase';  // Import Firebase configuration
// import './Login.css';

// const Login = () => {
//   // State for email and password fields
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       // The signed-in user info
//       const user = result.user;
//       console.log("User Info:", user);
//       alert(`Welcome ${user.displayName}`);
//       // You can now redirect or store user information as needed
//     } catch (error) {
//       console.error("Error during sign in:", error);
//       alert("Failed to sign in with Google.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle Email/Password login logic here (for now, just log the input)
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // You can extend this part with Firebase Email/Password Auth
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Enter your password"
//           />
//         </div>

//         <button type="submit" className="login-btn">Login</button>

//         <div className="divider">OR</div>

//         <button type="button" onClick={handleGoogleSignIn} className="login-btn google-btn">
//           Continue with Google
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase';  // Import Firebase config (auth, provider)
import { signInWithPopup } from 'firebase/auth';
import './Login.css';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);  // Update the user state with the signed-in user's information
      console.log("User Info:", user);
      navigate('/');  // Redirect to home after successful login
    } catch (error) {
      console.error("Error during sign in:", error);
      alert("Failed to sign in with Google.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <div className="divider">OR</div>

        <button type="button" onClick={handleGoogleSignIn} className="login-btn google-btn">
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
