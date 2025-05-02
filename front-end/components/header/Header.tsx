import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: 'radial-gradient(circle,rgb(0, 100, 3),rgb(0, 200, 10))',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '1rem',
      }}
    >
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          margin: 0,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: '2.5rem',
          letterSpacing: '2px',
        }}
      >
        Hyacinth Mower
      </h1>
    </header>
  );
};

export default Header;