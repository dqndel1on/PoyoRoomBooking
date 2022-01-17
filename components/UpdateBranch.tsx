import React from 'react';
import usePoyo from '../store/contract.store';

interface UpdateBranchProps {}

const UpdateBranch: React.FC<UpdateBranchProps> = () => {
  const [branchId, setBranchId] = React.useState<number>(0);
  const [branchName, setBranchName] = React.useState<string>('');
  const [totalRooms, setTotalRooms] = React.useState<number>(0);

  const { updateBranch } = usePoyo();
  const updateBranchHandler = (e) => {
    e.preventDefault();
    updateBranch({ _branchId: branchId, _branchName: branchName, _totalRooms: totalRooms });
  };
  return (
    <div className="mt-10">
      <form onSubmit={updateBranchHandler}>
        <h1 className="text-3xl font-black">Update Branch</h1>
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
          value="Update Branch"
        />
      </form>
    </div>
  );
};

export default UpdateBranch;
