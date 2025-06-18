import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const HRLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cognizantBlue = '#000048';
  const cognizantLightGray = '#F8F9FA';
  const navLinkActiveBg = '#1a1a80';
  const logoutButtonColor = '#0062A0'; 

  const handleLogout = () => {
    console.log('HR logged out');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyle = {
    width: isSidebarOpen ? '200px' : '60px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: cognizantBlue,
    color: 'white',
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
    flexShrink: 0,
  };

  const mainContentStyle = {
    marginLeft: isSidebarOpen ? '200px' : '60px',
    transition: 'margin-left 0.3s ease-in-out',
    backgroundColor: cognizantLightGray,
  };

  const navItems = [
    { to: '/hr/dashboard', label: 'Dashboard' },
    { to: '/hr/add-trainer', label: 'Add New Trainer' },
    { to: '/hr/add-cohort', label: 'Add New Cohort' },
    { to: '/hr/allocate-trainer', label: 'Allocate Trainer' },
    { to: '/hr/approvals', label: 'Approvals' },
    { to: '/hr/search', label: 'Search' },
    { to: '/hr/delete-trainer', label: 'Delete Trainer' },
    { to: '/hr/delete-cohort', label: 'Delete Cohort' },
    { to: '/hr/download', label: 'Download Data' },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div style={sidebarStyle} className="d-flex flex-column text-white">
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
          <button
            className="btn p-0 text-white"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{ fontSize: '1.5rem', lineHeight: '1' }}
          >
            ☰
          </button>
          {isSidebarOpen && <span className="ms-2 fw-bold">HR Panel</span>}
        </div>

        {isSidebarOpen && (
          <div className="d-flex flex-column w-100 h-100 pt-3 px-2">
            <ul className="nav flex-column">
              {navItems.map(({ to, label }) => (
                <li className="nav-item mb-2" key={to}>
                  <NavLink
                    to={to}
                    className="nav-link text-white py-2 px-3 rounded"
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? navLinkActiveBg : 'transparent',
                      transition: 'background-color 0.3s ease',
                    })}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = navLinkActiveBg)}
                    onMouseLeave={(e) => {
                      if (!window.location.pathname.startsWith(to)) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 px-2 mb-2 text-start">
              <button
                className="btn shadow-sm"
                onClick={handleLogout}
                style={{
                  backgroundColor: logoutButtonColor,
                  borderColor: logoutButtonColor,
                  color: 'white',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
                  padding: '0.5rem 1.5rem',
                  width: 'auto',
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={mainContentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default HRLayout;
