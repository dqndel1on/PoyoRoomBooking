import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdOutlineBedroomParent, MdLocationPin } from 'react-icons/md';
import usePoyo from '../store/contract.store';

interface BranchCardProps {
  branch: any;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  const router = useRouter();
  const { deleteBranch } = usePoyo();
  return (
    <div className="w-96 h-auto text-pink-600 mt-5 border hover:shadow-2xl transition-all duration-300 ease-in">
      <Link href={`/branch/${Number(branch[2].hex)}`}>
        <img src="../branch.jpg" />
      </Link>
      <div className="p-2">
        <Link href={`/branch/${branch[0]}`}>
          <h1 className="text-2xl cursor-pointer font-black">
            0{Number(branch[2].hex)}, {branch[0]}
          </h1>
        </Link>
        <div className="flex justify-between flex-wrap mt-2 text-lg font-bold">
          <h2 className="flex items-center">
            <MdLocationPin className="mr-2 w-6 h-6" /> {branch[0]}
          </h2>
          <h2 className="flex items-center">
            <MdOutlineBedroomParent className="mr-2 w-6 h-6" />
            {Number(branch[1].hex)}
          </h2>
        </div>
        {router.pathname === '/admin' && (
          <button
            onClick={() => deleteBranch(Number(branch[2].hex))}
            className="mt-4 bg-pink-600 text-white px-3 py-2 rounded-md">
            Remove Branch
          </button>
        )}
      </div>
    </div>
  );
};

export default BranchCard;
