import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-container">
                <h1>Student Management</h1>
                <Header />
                <hr></hr>
                <h3>Menu</h3>
                <MainContent />
            </div>
        </div>
    );
};

export default App;
