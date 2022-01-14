import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-headerFooter">
      <div className="px-20 py-5 container mx-auto">Footer</div>
    </footer>
  );
};

export default Footer;
