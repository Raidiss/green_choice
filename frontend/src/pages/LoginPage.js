import React from 'react';

import Login from '../components/auth/Login'

const LoginPage = ({ onRefresh }) => (
  <div className="page container">
    <Login onRefresh={onRefresh} />
  </div>
);

export default LoginPage;