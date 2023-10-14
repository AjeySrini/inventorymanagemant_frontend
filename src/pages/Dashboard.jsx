import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1><br></br>
            <p>To Add Product to inventory -- <Link to="/product">Click here</Link></p>
        </div>
    );
};

export default Dashboard;