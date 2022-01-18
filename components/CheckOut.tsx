import React from 'react';
import usePoyo from '../store/contract.store';

interface CheckOutProps {}

const CheckOut: React.FC<CheckOutProps> = () => {
  const [branchId, setBranchId] = React.useState<number>(0);
  const [roomNumber, setRoomNumber] = React.useState<number>(0);
  const [branchName, setBranchName] = React.useState<string>('');

  const { checkOut } = usePoyo();

  const checkOutHandler = () => {
    checkOut({ _branchName: branchName, _branchId: branchId, _roomNumber: roomNumber });
  };

  return (
    <div className="mt-10">
      <form onSubmit={checkOutHandler}>
        <h1 className="text-3xl font-black">Check Out</h1>
        <div className="mt-5">
          <label>Branch Id:</label>
          <input
            required
            value={branchId}
            onChange={(e) => setBranchId(Number(e.target.value))}
            className="border text-black"
            type="number"
          />
        </div>
        <div className="mt-5">
          <label>Branch Name:</label>
          <input
            required
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            className="border text-black"
            type="text"
          />
        </div>
        <div className="mt-5">
          <label>Room Number:</label>
          <input
            required
            value={roomNumber}
            onChange={(e) => setRoomNumber(Number(e.target.value))}
            className="border text-black"
            type="number"
          />
        </div>
        <input
          required
          className="mt-5 bg-pink-600 rounded-md px-3 py-2 text-white"
          type="submit"
          value="Check Out"
        />
      </form>
    </div>
  );
};

export default CheckOut;
