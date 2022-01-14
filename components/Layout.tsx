import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="min-h-screen hidden md:block">{children}</div>
      <div className="min-h-screen md:hidden flex justify-center items-center">
        ITS NOT RESPONSIVE. LOL!!!
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
