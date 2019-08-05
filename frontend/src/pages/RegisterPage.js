import React from 'react';

import Register from '../components/auth/Register'

const RegisterPage = ({ onRefresh }) => (
  <div className="page container">
    <Register onRefresh={onRefresh} />
  </div>
);

export default RegisterPage;