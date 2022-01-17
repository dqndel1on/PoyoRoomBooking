import React, { useEffect } from 'react';
import usePoyo from '../store/contract.store';

interface BranchListAdminProps {}

const BranchListAdmin: React.FC<BranchListAdminProps> = () => {
  const { branches, totalBranches, getBranches } = usePoyo();

  useEffect(() => {
    if (totalBranches > 0) {
      let i = 1;
      for (i; i <= totalBranches; i++) {
        getBranches(i);
      }
    }
  }, [totalBranches]);

  console.log(branches, totalBranches);
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-black">List of Branches</h1>
    </div>
  );
};

export default BranchListAdmin;
