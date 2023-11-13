// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

contract Twitter {
  struct Tweet {
    uint id;
    address author;
    string content;
    uint timestmap;
  }

  Tweet[] private _tweets;

  mapping(address => uint[]) private _tweetsByAuthor;
  uint myNumber = 3;
  string myString = 'Hello';
  bool myBool = true;

  // function createTweet(string memory _content) external {
  //   uint _id = tweets.length;
  //   uint _timestamp = block.timestamp;
  //   Tweet memory _tweet = Tweet(_id, msg.sender, _content, _timestamp);

  function createTweet(string memory _content) external {
    _tweets.puh(Tweet(_tweets.length, msg.sender, _content, block.timestamp));
    _tweetsByAuthor[msg.sender].push(_tweets.length);
    
    // _tweets.push(_tweet);
    // _tweetByAuthor[msg.sender].push(_id)
  }

  // address myAdress = 0x5B38;

  // function operateNumber() public pure returns (uint) {
  //   uint a = 1;
  //   uint b = 2;
  //   uint c = a + b;

    return c;
  }
  // constructor() {

  // }
}
