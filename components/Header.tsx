import React from 'react';
import ConnectButton from './ConnectButton';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-headerFooter">
      <div className="flex justify-between items-center py-5 container mx-auto px-20">
        <img src="/Poyo Logo.png" alt="Poyo Logo" className="h-10 w-auto" />
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
