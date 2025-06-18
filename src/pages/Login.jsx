// // src/pages/Login.jsx
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [role, setRole] = useState('HR')
//   const [id, setId] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleLogin = (e) => {
//     e.preventDefault()
//     console.log('Logging in as:', { role, id })
//     if (role === 'HR') navigate('/hr/dashboard')
//     else navigate('/trainer/dashboard')
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ minWidth: 350 }}>
//         <h4 className="text-center mb-4 text-primary">Sign In</h4>

//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Role</label>
//             <select className="form-select" value={role} onChange={e => setRole(e.target.value)}>
//               <option>HR</option>
//               <option>Trainer</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">ID</label>
//             <input
//               type="text"
//               className="form-control"
//               value={id}
//               onChange={e => setId(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="remember" />
//               <label className="form-check-label" htmlFor="remember">
//                 Remember Me
//               </label>
//             </div>
//             <a href="#" className="text-decoration-none text-primary small">
//               Forgot Password?
//             </a>
//           </div>

//           <button className="btn btn-primary w-100" type="submit">
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <small>
//             Don't have an account? <a href="#" className="text-decoration-none">Sign Up</a>
//           </small>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
// src/pages/Login.jsx
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [role, setRole] = useState('HR')
//   const [id, setId] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   // Define Cognizant-like blue color
//   const cognizantBlue = '#0073B9'; // A common Cognizant blue shade
//   const cognizantLightBlue = '#EAF4FA'; // A very light blue for backgrounds if needed, or stick to light gray

//   const handleLogin = (e) => {
//     e.preventDefault()
//     console.log('Logging in as:', { role, id })
//     if (role === 'HR') navigate('/hr/dashboard')
//     else navigate('/trainer/dashboard')
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: cognizantLightBlue }}>
//       <div className="card shadow p-4" style={{ minWidth: 350 }}>
//         {/* Applying Cognizant blue to the heading */}
//         <h4 className="text-center mb-4" style={{ color: cognizantBlue }}>Sign In</h4>

//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label">Role</label>
//             <select className="form-select" value={role} onChange={e => setRole(e.target.value)}>
//               <option>HR</option>
//               <option>Trainer</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="form-label">ID</label>
//             <input
//               type="text"
//               className="form-control"
//               value={id}
//               onChange={e => setId(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="remember" />
//               <label className="form-check-label" htmlFor="remember">
//                 Remember Me
//               </label>
//             </div>
//             {/* Applying Cognizant blue to the Forgot Password link */}
//             <a href="#" className="text-decoration-none small" style={{ color: cognizantBlue }}>
//               Forgot Password?
//             </a>
//           </div>

//           {/* Applying Cognizant blue to the Sign In button */}
//           <button className="w-100" type="submit" style={{ backgroundColor: cognizantBlue, borderColor: cognizantBlue, color: 'white' }}>
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <small>
//             Don't have an account? <a href="#" className="text-decoration-none" style={{ color: cognizantBlue }}>Sign Up</a>
//           </small>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login







// src/pages/Login.jsx
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../App';
import ResetPassword from './trainer/ResetPassword';


const Login = () => {
  const {user,setUser} = useContext(Usercontext);
  const [role, setRole] = useState('HR');
  const [username, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error messages
  const navigate = useNavigate();

  // Define Cognizant-like blue color
  const cognizantBlue = '#0073B9'; // A common Cognizant blue shade
  const cognizantLightBlue = '#EAF4FA'; // A very light blue for backgrounds if needed, or stick to light gray

 
  


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    const reqbody = {
      username,
      password,
      role
    };
  
    try {
      const response = await fetch('http://localhost:8082/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqbody),
      });
  
      if (response.status === 401) {
        alert("Unauthorized: Incorrect credentials!");
        navigate("/");
        return;
      }
  
      const data = await response.text();
      console.log(data);
      if (data === "Failed") {
        alert("Incorrect Credentials");
      } else {
        console.log('Login successful for:', { role, username });
        setUser(username);
  
        if (role === 'HR') {
          navigate('/hr/dashboard');
        } else {
          navigate('/trainer/dashboard');
        }
      }
  
    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message);
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: cognizantLightBlue }}>
      <div className="card shadow p-4" style={{ minWidth: 350 }}>
        {/* Applying Cognizant blue to the heading */}
        <h4 className="text-center mb-4" style={{ color: cognizantBlue }}>Sign In</h4>

        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Display error message */}

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-select" value={role} onChange={e => setRole(e.target.value)}>
              <option>HR</option>
              <option>Trainer</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={e => setId(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember Me
              </label>
            </div>
            {/* Applying Cognizant blue to the Forgot Password link */}
            <a href="/forgotpassword"  className="text-decoration-none small" style={{ color: cognizantBlue }}>
              Forgot Password?
            </a>
          </div>

          {/* Applying Cognizant blue to the Sign In button */}
          <button  className="w-100" type="submit" style={{ backgroundColor: cognizantBlue, borderColor: cognizantBlue, color: 'white' }}>
            Sign In
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account? <a href="/signup" className="text-decoration-none" style={{ color: cognizantBlue }}>Sign Up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;