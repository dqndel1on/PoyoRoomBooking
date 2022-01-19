import { ethers } from 'ethers';
import React from 'react';
import { AiOutlineNumber } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import usePoyo from '../store/contract.store';
import Poyo from '../artifacts/contracts/_PoyoRoomBook.sol/PoyoRoomBooking.json';

interface RoomDetailsProps {
  roomNumber: number;
  branchName: string;
  branchId: number;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({ roomNumber, branchId, branchName }) => {
  const [name, setName] = React.useState<string>('');
  const [valueInMatic, setValueInMatic] = React.useState<string>('');
  const [days, setDays] = React.useState<number>(1);
  const [roomStatus, setRoomStatus] = React.useState<any>();
  const { checkIn, contractAddress, checkOut } = usePoyo();

  const handleBookRoom = (e) => {
    e.preventDefault();
    checkIn({
      _valueInMatic: valueInMatic,
      _roomNumber: roomNumber,
      _branchId: branchId,
      _branchName: branchName,
      _time: days,
      _usedBy: name,
    });
  };

  const getRoomStatus = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Poyo.abi, signer);
      try {
        const transaction = await contract.getRoomStatus(branchName, roomNumber);
        setRoomStatus(transaction);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const checkOutHandler = () => {
    checkOut({ _branchName: branchName, _branchId: branchId, _roomNumber: roomNumber });
  };

  React.useEffect(() => {
    void getRoomStatus();
  }, []);

  return (
    <div className="w-96 h-auto mt-10 text-pink-600 border hover:shadow-2xl transition-all duration-300 ease-in">
      <img src="/room.jpg" alt="room.jpg" />
      <div className="p-3">
        <div className="flex justify-between">
          <div className="text-2xl flex items-center mt-2">
            <AiOutlineNumber className="w-6 h-6 mr-2" /> {roomNumber}
          </div>
          <div className="text-2xl flex items-center mt-2">
            <FaBed className="w-6 h-6 mr-2" /> 2
          </div>
        </div>
        <form onSubmit={handleBookRoom}>
          <div className="flex items-center justify-between mt-5">
            <div>
              <h1>Name</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="border mr-1 max-w-xs w-full text-black p-2"
              />
            </div>
            <div>
              <h1>Days of Stay</h1>
              <input
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                required
                type="number"
                placeholder="Days of Stay"
                className="border ml-1 max-w-xs w-full text-black p-2"
              />
            </div>
          </div>
          <div>
            <h1>Matic to pay</h1>
            <input
              value={valueInMatic}
              onChange={(e) => setValueInMatic(e.target.value)}
              required
              className="border ml-1 max-w-xs w-full text-black p-2"
            />
          </div>
          {roomStatus?.isOccupied ? (
            <div className="flex items-center justify-between mt-5 uppercase">
              <button
                onClick={checkOutHandler}
                className="bg-pink-600 px-3 py-2 rounded-md text-white">
                Check Out
              </button>
              <h1>Used By: {roomStatus[3]}</h1>
            </div>
          ) : (
            <input
              type="submit"
              value="Book Room"
              className="bg-pink-600 px-3 py-2 mt-5 rounded-md text-white"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default RoomDetails;
