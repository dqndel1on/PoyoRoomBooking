import React from 'react';

interface ConnectButtonProps {}

const ConnectButton: React.FC<ConnectButtonProps> = () => {
  return <button className="bg-pink-600 p-2 rounded-md text-white">Connect Wallet</button>;
};

export default ConnectButton;
