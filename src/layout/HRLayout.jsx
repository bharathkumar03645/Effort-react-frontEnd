import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const HRLayout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('HR logged out')
    navigate('/')
  }

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '240px' }}>
        <h5 className="text-center mb-4">HR PANEL</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/hr/dashboard" className="nav-link text-white">Dashboard</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/add-trainer" className="nav-link text-white">Add New Trainer</NavLink>
          </li>

          <li className="nav-item mb-2">
            <NavLink to="/hr/add-cohort" className="nav-link text-white">Add New Cohort</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/allocate-trainer" className="nav-link text-white">Allocate Trainer</NavLink>
          </li>
          <li className="nav-item mb-2">
             <NavLink to="/hr/approvals"  className="nav-link text-white  py-2 px-3 rounded">Approvals</NavLink>

          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/search" className="nav-link text-white">Search</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/delete-trainer" className="nav-link text-white">Delete Trainer</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/delete-cohort" className="nav-link text-white">Delete Cohort</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/hr/download" className="nav-link text-white">Download Data</NavLink>
          </li>
          <li className="nav-item mt-3">
            <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  )
}

export default HRLayout
