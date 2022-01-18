import React, { useEffect } from 'react';
import usePoyo from '../store/contract.store';
import BranchCard from './BranchCard';

interface BranchListAdminProps {}

const BranchListAdmin: React.FC<BranchListAdminProps> = () => {
  const { branches } = usePoyo();

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-black">List of Branches</h1>
      <div className="flex justify-between items-center flex-wrap my-10">
        {branches.map((branch) => (
          <BranchCard key={branch[0]} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default BranchListAdmin;
