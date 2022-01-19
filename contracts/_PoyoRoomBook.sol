// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// The sample hotel and vending Solidity smart contract below allows one to rent a hotel room. It allows someone to make a payment for a room if the room is vacant. After payment is made to the contract the funds are sent to the owner. This smart contract can be expanded to unlock the door or dispense a key code after payment is made.
// Think of this contract like a vending machine. You input funds, validations pass, and you get something in return. It is the same concept as a gumball machine. 

contract PoyoRoomBooking {
    using SafeMath for uint;
    address payable public owner;
    uint public totalBranches = 0 ;

    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
        owner = payable(msg.sender);
    }

    mapping(string => mapping(uint => roomStatus) ) public customers;
    mapping(uint => branchDetails) public motelBranches;

    struct branchDetails {
        string branchName;
        uint totalRooms;
        uint branchId;
    }

    struct roomStatus {
        bool isOccupied;
        uint roomNumber;
        uint time;
        string usedBy;
        address bookingAddress;
        string branch;
    }

    modifier onlyOwner() {
        require(msg.sender == owner,"You do not have permission to perform this task");
        _;
    }

    function getLatestPrice() public view returns (uint) {
        (,int price,,,) = priceFeed.latestRoundData();
        return uint(price * 10000000000);
    }

    function getConversionRate(uint _amount) public view returns (uint){
        uint pricePerToken = getLatestPrice();
        uint tokenPriceInUsd = (pricePerToken * _amount) / 1000000000000000000;
        return tokenPriceInUsd;
    }

    function checkIn(uint _roomNumber,uint _branchId,string calldata _branchName,uint _time, string calldata _usedBy) public payable{
        require(getConversionRate(msg.value) > 0.1*10**18 ,"The Amount must be greater than minimum amount!");
        require(_roomNumber >0 && _roomNumber <= motelBranches[_branchId].totalRooms,"This room number does not exist.");
        require(customers[_branchName][_roomNumber].isOccupied == false,"This room is already in use!");
        customers[_branchName][_roomNumber] = roomStatus({
            isOccupied:true,
            roomNumber: _roomNumber,
            time: block.timestamp + _time * 86400,
            usedBy: _usedBy,
            bookingAddress: msg.sender,
            branch: _branchName
        });
    }

    function checkOut(string calldata _branchName, uint _branchId, uint _roomNumber) public{
        require(_roomNumber >0 && _roomNumber <= motelBranches[_branchId].totalRooms,"This room number does not exist.");
        require((msg.sender == owner) || (msg.sender == customers[_branchName][_roomNumber].bookingAddress),"You do not have enough permission!");

        delete customers[_branchName][_roomNumber];  
        customers[_branchName][_roomNumber].isOccupied=false;
    } 

    function getRoomStatus(string calldata _branchName,uint _roomNumber) public view returns(roomStatus memory) {
        require(_roomNumber >0 && _roomNumber <= 10,"This room number does not exist.");
        return customers[_branchName][_roomNumber];
    }

    function addBranch(uint _branchId,uint _totalRooms,string calldata _branchName) public onlyOwner {
        motelBranches[_branchId] = branchDetails({
            branchName:_branchName,
            branchId:_branchId,
            totalRooms:_totalRooms
        });
        totalBranches = totalBranches + 1;
    }

    function updateBranchDetails(uint _branchId, string calldata _branchName, uint _totalRooms) public onlyOwner {
    motelBranches[_branchId] = branchDetails({
            branchName:_branchName,
            branchId:_branchId,
            totalRooms:_totalRooms
        });
    }

    function deleteBranch(uint _id) public onlyOwner {
        delete motelBranches[_id];
        totalBranches = totalBranches - 1;
    }
}