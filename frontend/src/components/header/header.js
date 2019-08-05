import React from 'react';
import Navigation from './Navigation';

const header = ({ user }) => (
    <header>
        <Navigation user={user} />
    </header>
);

export default header;