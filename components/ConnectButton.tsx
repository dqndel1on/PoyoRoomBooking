import React from 'react';
import { useEthers } from '../store/ethers.store';
import { FiCopy } from 'react-icons/fi';

declare let window: any;

interface ConnectButtonProps {}

const ConnectButton: React.FC<ConnectButtonProps> = () => {
  const { accounts, requestAccounts, checkMMConnection } = useEthers();

  React.useEffect(() => {
    checkMMConnection();
  }, [accounts]);

  React.useEffect(() => {
    if (typeof window.ethereum !== undefined) {
      window.ethereum.on('accountsChanged', () => {
        void requestAccounts();
      });
    }
  }, [accounts]);

  const handleConnectWallet = () => {
    void requestAccounts();
  };
  return (
    <section
      className={`text-white flex items-center bg-gray-500 rounded-md ${accounts && 'pl-3'}`}>
      {accounts && (
        <>
          <FiCopy
            onClick={() => {
              navigator.clipboard.writeText(accounts[0]);
            }}
            className="cursor-pointer"
          />
          <span className="mx-2">{accounts}</span>
        </>
      )}
      <button
        className={`bg-pink-600 p-2 ${accounts ? 'rounded-r-md' : 'rounded-md'}  text-white`}
        onClick={handleConnectWallet}>
        {accounts ? 'Connected' : 'Connect Wallet'}
      </button>
    </section>
  );
};

export default ConnectButton;
