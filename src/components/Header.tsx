import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-morandi-stone mb-2">
        Daily Todo & Motivation
      </h1>
      <p className="text-morandi-stone opacity-80">
        Organize your day and stay motivated
      </p>
    </header>
  );
};

export default Header;
