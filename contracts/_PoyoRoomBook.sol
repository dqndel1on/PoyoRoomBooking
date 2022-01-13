// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
// The sample hotel and vending Solidity smart contract below allows one to rent a hotel room. It allows someone to make a payment for a room if the room is vacant. After payment is made to the contract the funds are sent to the owner. This smart contract can be expanded to unlock the door or dispense a key code after payment is made.
// Think of this contract like a vending machine. You input funds, validations pass, and you get something in return. It is the same concept as a gumball machine. 

contract PoyoRoomBooking {
    using SafeMath for uint;
    uint public minimumAmount = 0;
    uint public totalRooms = 5;
    address payable public owner;

    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);
        owner = payable(msg.sender);
    }

    mapping(string => mapping(uint => roomStatus) ) public customers;
    mapping(uint => string) public motelBranches;

    struct roomStatus {
        uint roomNumber;
        uint time;
        string usedBy;
        address bookingAddress;
        string branch;
    }

    modifier onlyOwner() {
        require(msg.sender == owner,"Only owner can do this task!");
        _;
    }

    function setMinimumAmount(uint _amount) public {
        minimumAmount = _amount * 10 ** 18;
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

    function checkIn(uint _roomNumber,string calldata _branchName,uint _time, string calldata _usedBy) public payable{
        // require(getConversionRate(msg.value) > minimumAmount,"The Amount must be greater than minimum amount!");?
        customers[_branchName][_roomNumber]=roomStatus({
            roomNumber: _roomNumber,
            time: block.timestamp + _time,
            usedBy: _usedBy,
            bookingAddress: msg.sender,
            branch: _branchName
        });
    }

    function checkOut(string calldata _branchName,uint _roomNumber) public {
        delete customers[_branchName][_roomNumber];  
    } 

    function getRoomStatus(string calldata _branchName,uint _roomNumber) public view returns(roomStatus memory) {
        return customers[_branchName][_roomNumber];
    }


    function addBranch(uint _id,string calldata _branchName) public onlyOwner{
        motelBranches[_id]=_branchName;
    }

    function deleteBranch(uint _id) public onlyOwner {
        delete motelBranches[_id];
    }
}