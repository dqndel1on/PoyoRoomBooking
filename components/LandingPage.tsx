import React from 'react';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      <div className="relative">
        <img src="/room.jpg" alt="ROOM" className="w-full h-auto" />
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
};

export default LandingPage;
