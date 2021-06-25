pragma solidity ^0.8.4;
contract Poll {
    event Voted(address _voter, int value);
    
    
    // mapping of ballots, -1 for nay, 1 for aye, 0 for not voted
    mapping(address => int) public ballots;
    
    string public title;
    address initiatedBy;
    uint256 deadline;
    
    constructor(string memory _title, uint256 _deadline) {
        require(block.timestamp < _deadline, "invalid timestamp");
        title = _title;
        deadline = _deadline;
        initiatedBy = msg.sender;
    }
    function getPoll() view public returns (string memory)  {
        return title;
    }
    function vote(int ballot) public {
        require(ballot == -1 || ballot == 1, "invalid vote");
        require(ballots[msg.sender] == 0, "principle on voting: one person one vote");
        require(block.timestamp < deadline, "vote has ended.");
        emit Voted(msg.sender, ballot);
        ballots[msg.sender] = ballot;
    }
}