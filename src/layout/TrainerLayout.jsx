// import { NavLink, Outlet, useNavigate } from 'react-router-dom'

// const TrainerLayout = () => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     console.log('Trainer logged out')
//     navigate('/')
//   }

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: '220px' }}>
//         <h5 className="text-center mb-4">Trainer Panel</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/dashboard" className="nav-link text-white">Dashboard</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/log-effort" className="nav-link text-white">Log Effort</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/update-info" className="nav-link text-white">Update Info</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink to="/trainer/raise-query" className="nav-link text-white">Raise Query</NavLink>
//           </li>
//           <li className="nav-item mt-3">
//             <button className="btn btn-sm btn-danger w-100" onClick={handleLogout}>Logout</button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4 bg-light">
//         <Outlet />
//       </div>
//     </div>
//   )
// }

// export default TrainerLayout
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// // Assume your logo is in public/images/cognizant_logo.svg
// // For direct Bootstrap usage, if you put it in 'public' folder,
// // you'd typically reference it like '/images/cognizant_logo.svg'
// // For React setup, it's better to import it like below (if using CRA/Vite)
// const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';
// const TrainerLayout = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

//   // Define Cognizant-like color palette
//   const cognizantBlue = '#000048';        // Main Cognizant Blue
//   const cognizantDarkBlue = '#000048';    // Deeper blue for sidebar background
//   const cognizantLightGray = '#F8F9FA';   // Light gray for main content background
//   const navLinkActiveBg = '#000048';     // Slightly lighter blue for active nav link background
//   const logoutButtonHoverBg = '#0062A0'; // Slightly darker blue for logout button hover

//   const handleLogout = () => {
//     console.log('Trainer logged out');
//     navigate('/');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Helper styles for transitions (Bootstrap doesn't have direct width transitions)
//   const sidebarTransitionStyle = {
//     transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out',
//     overflowX: 'hidden', // Hide content overflowing horizontally during transition
//     flexShrink: 0, // Prevent sidebar from shrinking below its width
//   };

//   const mainContentTransitionStyle = {
//     transition: 'margin-left 0.3s ease-in-out',
//   };

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <div
//         className="text-white p-3 d-flex flex-column"
//         style={{
//           width: isSidebarOpen ? '220px' : '60px',
//           backgroundColor: cognizantDarkBlue,
//           position: 'relative', // For hamburger button positioning
//           ...sidebarTransitionStyle, // Apply custom transition
//         }}
//       >
//         {/* Hamburger Icon (using Bootstrap's navbar-toggler-icon) */}
//         <button
//           className="navbar-toggler p-0 border-0 align-self-start position-absolute"
//           type="button"
//           onClick={toggleSidebar}
//           aria-controls="sidebarContent"
//           aria-expanded={isSidebarOpen}
//           aria-label="Toggle navigation"
//           style={{ top: '15px', left: '15px', zIndex: 1050 }}
//         >
//           <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span> {/* Invert for white icon */}
//         </button>

//         {isSidebarOpen && (
//           <div className="d-flex flex-column w-100 h-100 pt-5"> {/* Added pt-5 to clear hamburger */}
//             {/* Cognizant Logo */}
//             <div className="text-center mb-4 mt-2"> 
//               <img
//                 src={cognizantLogoUrl}
//                 alt="Cognizant Logo"
//                 className="img-fluid" // Make image responsive within its container
//                 style={{ maxWidth: '50px', height: '50' }}
//               />
//             </div>

//             <h5 className="text-center mb-4">Trainer Panel</h5>

//             <ul className="nav flex-column flex-grow-1">
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/dashboard"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/dashboard')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/log-effort"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/log-effort')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Log Effort
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/update-info"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/update-info')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Update Info
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/trainer/raise-query"
//                   className="nav-link text-white py-2 px-3 rounded"
//                   style={({ isActive }) => ({
//                     backgroundColor: isActive ? navLinkActiveBg : 'transparent',
//                     transition: 'background-color 0.3s ease',
//                   })}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
//                   onMouseLeave={(e) => {
//                     if (!window.location.pathname.startsWith('/trainer/raise-query')) {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                     }
//                   }}
//                 >
//                   Raise Query
//                 </NavLink>
//               </li>
//               <li className="nav-item mt-auto pt-3">
//                 <button
//                   className="btn w-100"
//                   onClick={handleLogout}
//                   style={{
//                     backgroundColor: cognizantBlue,
//                     borderColor: cognizantBlue,
//                     color: 'white',
//                     transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                     e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = cognizantBlue;
//                     e.currentTarget.style.borderColor = cognizantBlue;
//                   }}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//         {!isSidebarOpen && ( // Display icons only when sidebar is closed
//             <ul className="nav flex-column flex-grow-1 mt-5"> {/* mt-5 for spacing from toggler */}
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/dashboard" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-house-door d-block fs-5"></i> {/* Bootstrap icon example */}
//                         <small>Dash</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/log-effort" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-pencil-square d-block fs-5"></i>
//                         <small>Effort</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/update-info" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-info-circle d-block fs-5"></i>
//                         <small>Info</small>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item mb-2">
//                     <NavLink to="/trainer/raise-query" className="nav-link text-white text-center py-2 px-0">
//                         <i className="bi bi-question-circle d-block fs-5"></i>
//                         <small>Query</small>
//                     </NavLink>
//                 </li>
//                  <li className="nav-item mt-auto pt-3">
//                     <button
//                         className="btn w-100 d-flex flex-column align-items-center justify-content-center"
//                         onClick={handleLogout}
//                         style={{
//                             backgroundColor: cognizantBlue,
//                             borderColor: cognizantBlue,
//                             color: 'white',
//                             transition: 'background-color 0.3s ease, border-color 0.3s ease',
//                         }}
//                         onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
//                             e.currentTarget.style.borderColor = logoutButtonHoverBg;
//                         }}
//                         onMouseLeave={(e) => {
//                             e.currentTarget.style.backgroundColor = cognizantBlue;
//                             e.currentTarget.style.borderColor = cognizantBlue;
//                         }}
//                     >
//                         <i className="bi bi-box-arrow-right fs-5"></i>
//                         <small>Out</small>
//                     </button>
//                 </li>
//             </ul>
//         )}
//       </div>

//       {/* Main Content */}
//       <div
//         className="flex-grow-1 p-4"
//         style={{
//           backgroundColor: cognizantLightGray,
//           marginLeft: isSidebarOpen ? '0' : '0', // No margin-left needed if sidebar is positioned absolutely or fixed
//           ...mainContentTransitionStyle, // Apply custom transition
//         }}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default TrainerLayout;
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// Assume your logo is in public/images/cognizant_logo.svg
// For direct Bootstrap usage, if you put it in 'public' folder,
// you'd typically reference it like '/images/cognizant_logo.svg'
// For React setup, it's better to import it like below (if using CRA/Vite)
const cognizantLogoUrl = 'https://miro.medium.com/v2/resize:fit:2400/1*a0PkTH4gryDQdVcLqDGpkA.png';
const TrainerLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

  // Define Cognizant-like color palette
  const cognizantBlue = '#000048';        // Main Cognizant Blue
  const cognizantDarkBlue = '#000048';    // Deeper blue for sidebar background
  const cognizantLightGray = '#F8F9FA';   // Light gray for main content background
  const navLinkActiveBg = '#000048';     // Slightly lighter blue for active nav link background
  const logoutButtonHoverBg = '#0062A0'; // Slightly darker blue for logout button hover

  const handleLogout = () => {
    console.log('Trainer logged out');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper styles for transitions (Bootstrap doesn't have direct width transitions)
  const sidebarTransitionStyle = {
    transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out',
    overflowX: 'hidden', // Hide content overflowing horizontally during transition
    flexShrink: 0, // Prevent sidebar from shrinking below its width
  };

  const mainContentTransitionStyle = {
    transition: 'margin-left 0.3s ease-in-out',
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="text-white p-3 d-flex flex-column"
        style={{
          width: isSidebarOpen ? '220px' : '60px',
          backgroundColor: cognizantDarkBlue,
          position: 'relative', // For hamburger button positioning
          ...sidebarTransitionStyle, // Apply custom transition
        }}
      >
        {/* Hamburger Icon (using Bootstrap's navbar-toggler-icon) */}
        <button
          className="navbar-toggler p-0 border-0 align-self-start position-absolute"
          type="button"
          onClick={toggleSidebar}
          aria-controls="sidebarContent"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle navigation"
          style={{ top: '15px', left: '15px', zIndex: 1050 }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span> {/* Invert for white icon */}
        </button>

        {isSidebarOpen && (
          <div className="d-flex flex-column w-100 h-100 pt-5"> {/* Added pt-5 to clear hamburger */}
            {/* Cognizant Logo */}
            <div className="text-center mb-4 mt-2"> 
              <img
                src={cognizantLogoUrl}
                alt="Cognizant Logo"
                className="img-fluid" // Make image responsive within its container
                style={{ maxWidth: '50px', height: '50' }}
              />
            </div>

            <h5 className="text-center mb-4">Trainer Panel</h5>

            <ul className="nav flex-column flex-grow-1">
              <li className="nav-item mb-2">
                <NavLink
                  to="/trainer/dashboard"
                  className="nav-link text-white py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith('/trainer/dashboard')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/trainer/notification"  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })} className="nav-link text-white  py-2 px-3 rounded">Notifications</NavLink>

              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/trainer/log-effort"
                  className="nav-link text-white py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith('/trainer/log-effort')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Log Effort
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/trainer/update-info"
                  className="nav-link text-white py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith('/trainer/update-info')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Update Info
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/trainer/raise-query"
                  className="nav-link text-white py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith('/trainer/raise-query')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Raise Query
                </NavLink>
              </li>
              {/* New: Reset Password Link */}
              <li className="nav-item mb-2">
                <NavLink
                  to="/trainer/reset-password"
                  className="nav-link text-white py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkActiveBg}
                  onMouseLeave={(e) => {
                    if (!window.location.pathname.startsWith('/trainer/reset-password')) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Reset Password
                </NavLink>
              </li>
              <li className="nav-item mt-auto pt-3">
                <button
                  className="btn w-100"
                  onClick={handleLogout}
                  style={{
                    backgroundColor: cognizantBlue,
                    borderColor: cognizantBlue,
                    color: 'white',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
                    e.currentTarget.style.borderColor = logoutButtonHoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = cognizantBlue;
                    e.currentTarget.style.borderColor = cognizantBlue;
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        {!isSidebarOpen && ( // Display icons only when sidebar is closed
            <ul className="nav flex-column flex-grow-1 mt-5"> {/* mt-5 for spacing from toggler */}
              <li className="nav-item mb-2">
                  <NavLink to="/trainer/dashboard" className="nav-link text-white text-center py-2 px-0">
                    <i className="bi bi-house-door d-block fs-5"></i> {/* Bootstrap icon example */}
                    <small>Dash</small>
                  </NavLink>
              </li>
              <li className="nav-item mb-2">
                  <NavLink to="/trainer/log-effort" className="nav-link text-white text-center py-2 px-0">
                    <i className="bi bi-pencil-square d-block fs-5"></i>
                    <small>Effort</small>
                  </NavLink>
              </li>
              <li className="nav-item mb-2">
                  <NavLink to="/trainer/update-info" className="nav-link text-white text-center py-2 px-0">
                    <i className="bi bi-info-circle d-block fs-5"></i>
                    <small>Info</small>
                  </NavLink>
              </li>
              <li className="nav-item mb-2">
                  <NavLink to="/trainer/raise-query" className="nav-link text-white text-center py-2 px-0">
                    <i className="bi bi-question-circle d-block fs-5"></i>
                    <small>Query</small>
                  </NavLink>
              </li>
              {/* New: Reset Password Icon Link */}
              <li className="nav-item mb-2">
                  <NavLink to="/trainer/reset-password" className="nav-link text-white text-center py-2 px-0">
                    <i className="bi bi-key d-block fs-5"></i> {/* Using 'bi-key' for reset password */}
                    <small>Pass</small>
                  </NavLink>
              </li>
               <li className="nav-item mt-auto pt-3">
                  <button
                      className="btn w-100 d-flex flex-column align-items-center justify-content-center"
                      onClick={handleLogout}
                      style={{
                          backgroundColor: cognizantBlue,
                          borderColor: cognizantBlue,
                          color: 'white',
                          transition: 'background-color 0.3s ease, border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = logoutButtonHoverBg;
                          e.currentTarget.style.borderColor = logoutButtonHoverBg;
                      }}
                      onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = cognizantBlue;
                          e.currentTarget.style.borderColor = cognizantBlue;
                      }}
                  >
                      <i className="bi bi-box-arrow-right fs-5"></i>
                      <small>Out</small>
                  </button>
              </li>
            </ul>
        )}
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          backgroundColor: cognizantLightGray,
          marginLeft: isSidebarOpen ? '0' : '0', // No margin-left needed if sidebar is positioned absolutely or fixed
          ...mainContentTransitionStyle, // Apply custom transition
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default TrainerLayout;