// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.0 <0.9.0;

//declaring a contract
contract Election{

    //Model a candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }

    //store account that have voted
    mapping(address => bool) public voters;
    //store candidates
    //Fetch candidates
    mapping(uint => Candidate) public candidates;

    //State variable that store a candidates count
    uint public candidatesCount;

    //voted Event
    event votedEvent(
        uint indexed _candidateId
    );

    //Contructor
    constructor () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        //Increment candidate count 
        candidatesCount++;

        //Create a candidate by passing key as candiadateCount and assign a model(structure) of candiadte correspond to key
        candidates[candidatesCount] = Candidate(candidatesCount , _name , 0);
    }

    function vote (uint _candidateId) public{

        //require that account haven't voted before
        require(!voters[msg.sender]);

        //require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount );

        //record that voter has voted
        //access account who is voting by (msg.sender)
        voters[msg.sender]= true;

        //Update candidate vote count
        //We reference our candidate from mapping and read value of the candidate 
        //struct that we are trying to vote for and increment votecount of 
        //respective candidate
        candidates[_candidateId].voteCount ++;

        //trigger voted event
        emit votedEvent(_candidateId);
    }
}