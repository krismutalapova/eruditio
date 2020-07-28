import React from 'react';

const ConnectionsNavLink = ({ onClick, classes, text }) => (
    <button
        className={`flex-grow p-4 text-sm md:text-base ${classes}`}
        onClick={onClick}
    >
        {text}
    </button>
);

export default ConnectionsNavLink;
