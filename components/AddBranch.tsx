import { ethers } from 'ethers';
import React from 'react';
import usePoyo from '../store/contract.store';

interface AddBranchProps {}

const AddBranch: React.FC<AddBranchProps> = () => {
  const [branchId, setBranchId] = React.useState<number>(0);
  const [branchName, setBranchName] = React.useState<string>('');
  const [totalRooms, setTotalRooms] = React.useState<number>(0);

  const { addBranch } = usePoyo();
  const addBranchHandler = (e) => {
    e.preventDefault();
    addBranch({ _branchId: branchId, _branchName: branchName, _totalRooms: totalRooms });
  };
  return (
    <div className="mt-10">
      <form onSubmit={addBranchHandler}>
        <h1 className="text-3xl font-black">Add Branch</h1>
        <div className="mt-5">
          <label>Branch Id:</label>
          <input
            value={branchId}
            onChange={(e) => setBranchId(Number(e.target.value))}
            className="border text-black"
            type="number"
          />
        </div>
        <div className="mt-5">
          <label>Branch Name:</label>
          <input
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            className="border text-black"
            type="text"
          />
        </div>
        <div className="mt-5">
          <label>Total Rooms:</label>
          <input
            value={totalRooms}
            onChange={(e) => setTotalRooms(Number(e.target.value))}
            className="border text-black"
            type="number"
          />
        </div>
        <input
          className="mt-5 bg-pink-600 rounded-md px-3 py-2 text-white"
          type="submit"
          value="Add Branch"
        />
      </form>
    </div>
  );
};

export default AddBranch;
