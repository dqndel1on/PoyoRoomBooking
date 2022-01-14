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
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
