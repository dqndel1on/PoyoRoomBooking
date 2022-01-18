import React from 'react';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="mx-auto">
      <div className="container mx-auto h-full pt-64 w-full pb-20 px-20">
        <h1 className="font-black text-8xl text-black">
          Book <span className="text-pink-600">Rooms</span>
        </h1>
        <h1 className="text-black font-black text-8xl mt-10">
          At <span className="text-pink-600">PoYo.</span>
        </h1>
        {/*<div className="mt-32 max-w-7xl mx-auto border p-3 flex justify-around text-black">
          <select className="p-2 w-full mx-2 bg-black text-white">
            <option value="" disabled selected>
              Select Branch
            </option>
            <option value="sad">sad</option>
          </select>
          <select className="p-2 w-full mx-2 bg-black text-white">
            <option value="" disabled selected>
              Select Room Number
            </option>
            <option value="sad">sad</option>
          </select>
          <select className="p-2 w-full mx-2 bg-black text-white">
            <option value="" disabled selected>
              Days of Stay
            </option>
            <option value="sad">sad</option>
          </select>
          <input placeholder="Name" className="p-2 w-full mx-2 bg-black text-white"></input>
          <button className="p-2 bg-pink-600 w-full text-white">Book Room</button>
        </div>*/}
      </div>
    </div>
  );
};

export default LandingPage;
