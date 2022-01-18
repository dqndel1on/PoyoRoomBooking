import Link from 'next/link';
import React from 'react';
import usePoyo from '../store/contract.store';
import ConnectButton from './ConnectButton';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { getInitialData, totalBranches, getBranches } = usePoyo();

  React.useEffect(() => {
    if (totalBranches > 0) {
      let i = 1;
      for (i; i <= totalBranches; i++) {
        getBranches(i);
      }
    }
  }, [totalBranches]);

  React.useEffect(() => {
    void getInitialData();
  }, []);

  return (
    <header className="bg-headerFooter">
      <div className="flex justify-between items-center py-5 container mx-auto px-20">
        <Link href="/">
          <img src="/Poyo Logo.png" alt="Poyo Logo" className="h-10 w-auto" />
        </Link>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
