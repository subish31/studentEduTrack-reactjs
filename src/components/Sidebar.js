import React from 'react';
import image from "./ABC.png";
import { IoMdExit } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaUsers, FaMoneyBill, FaClipboard, FaChartBar, FaCheckCircle, FaCog } from 'react-icons/fa';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={image} alt="Logo" />
            </div>
            <ul className="sidebar-menu">
                <li><FaUsers /> <div>Student Management</div></li>
                <li><FaMoneyBill /> <div>Financial Management</div></li>
                <li><FaClipboard /><div>Quality Control</div></li>
                <li><FaChartBar /> <div>Report Delivery</div></li>
                <li><FaCheckCircle /> <div>Attendance</div></li>
                <li><AiOutlineQuestionCircle style={{ margin: '0px 20px' }} size={30}/>  <FaCog style={{ margin: '0px 20px' }} size={30}/>   <IoMdExit style={{ margin: '0px 20px' }} size={30}/></li>
            </ul>
        </div>
    );
};

export default Sidebar;
