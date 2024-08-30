import React from 'react'
import { FaUser,FaBookOpen ,FaUsers, FaChalkboardTeacher, FaEnvelope, FaCheckCircle, FaStethoscope } from 'react-icons/fa';
const MainContent = () => {
  return (
    <div className='main-content'>
          <div className="menu-item"><FaUser size={60} color="#7d5d4a"/><div>Regular Enrollment</div></div>
          <div className="menu-item"><FaBookOpen size={60} color="#7d5d4a"/><div>Remedial Enrollment</div></div>
          <div className="menu-item"> <FaUsers size={60} color="#7d5d4a"/><div>Club Management</div></div>
          <div className="menu-item"><FaChalkboardTeacher size={60} color="#7d5d4a"/><div>Classroom Management</div></div>
          <div className="menu-item"><FaEnvelope size={60} color="#7d5d4a"/><div>SMS/Email</div></div>
          <div className="menu-item"><FaCheckCircle size={60} color="#7d5d4a"/><div>Attendance</div></div>
          <div className="menu-item"><FaStethoscope size={60} color="#7d5d4a"/><div>Clinic</div></div>
    </div>
  )
}

export default MainContent
