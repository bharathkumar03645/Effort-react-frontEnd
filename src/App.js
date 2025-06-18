// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import HRLayout from './layout/HRLayout'
import TrainerLayout from './layout/TrainerLayout'
import TrainerDashboard from './pages/trainer/Dashboard'
import LogEffort from './pages/trainer/LogEffort'
import UpdateInfo from './pages/trainer/UpdateInfo'
import RaiseQuery from './pages/trainer/RaiseQuery'

// inside <Route path="/trainer/*" element={<TrainerLayout />} />
import HRDashboard from './pages/hr/HRDashboard'
import AddTrainer from './pages/hr/AddTrainer'
import AddCohort from './pages/hr/AddCohort'
import AllocateTrainer from './pages/hr/AllocateTrainer'
import Search from './pages/hr/Search'
import DeleteTrainer from './pages/hr/DeleteTrainer'
import DeleteCohort from './pages/hr/DeleteCohort'
import DownloadData from './pages/hr/DownloadData'
import Settings from './pages/hr/Settings'
import { createContext, useState } from 'react'
import ResetPassword from './pages/trainer/ResetPassword'
import Signup from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Approvals from './pages/hr/Approvals'
import Notification from './pages/trainer/Notification'



export const Usercontext = createContext();

function App() {
  const [user,setUser] = useState(null);


  return (
    <Usercontext.Provider value={{user,setUser}}>

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
       

         <Route path="/hr/*" element={<HRLayout />}>
         <Route path="approvals" element={<Approvals />} />
          <Route path="dashboard" element={<HRDashboard />} />
          <Route path="add-trainer" element={<AddTrainer />} />
          <Route path="add-cohort" element={<AddCohort />} />
          <Route path="allocate-trainer" element={<AllocateTrainer />} />
          <Route path="search" element={<Search />} />
          <Route path="delete-trainer" element={<DeleteTrainer />} />
          <Route path="delete-cohort" element={<DeleteCohort />} />
          <Route path="download" element={<DownloadData />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/hr/dashboard" />} />
        </Route>
         <Route path="/trainer/*" element={<TrainerLayout />}>
            <Route path="dashboard" element={<TrainerDashboard />} />
            <Route path="notification" element={<Notification />} />

            <Route path="log-effort" element={<LogEffort />} />
            <Route path="update-info" element={<UpdateInfo />} />
            <Route path="raise-query" element={<RaiseQuery />} />
            <Route path="reset-password" element={<ResetPassword/>}/>
          </Route>      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </Usercontext.Provider>
  )
}

export default App

