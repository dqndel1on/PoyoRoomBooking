import React from 'react';
import { useEthers } from '../store/ethers.store';
import { FiCopy } from 'react-icons/fi';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

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

  const disconnectAccount = async () => {
    if (typeof window.ethereum !== undefined) {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
      });
      await web3Modal.clearCachedProvider();
    }
  };

  const handleConnectWallet = () => {
    if (accounts !== '') {
      void disconnectAccount();
    } else {
      void requestAccounts();
    }
  };
  return (
    <section
      className={`text-white flex items-center bg-gray-500 rounded-md ${
        accounts !== '' && 'pl-3'
      }`}>
      {accounts !== '' && (
        <>
          <FiCopy
            onClick={() => {
              navigator.clipboard.writeText(accounts[0]);
            }}
            className="cursor-pointer"
          />
          <span className="mx-2">{accounts?.substring(0, 10)}...</span>{' '}
        </>
      )}
      <button
        className={`bg-pink-600 p-2 ${accounts !== '' ? 'rounded-r-md' : 'rounded-md'}  text-white`}
        onClick={handleConnectWallet}>
        {accounts !== '' ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
    </section>
  );
};

export default ConnectButton;
