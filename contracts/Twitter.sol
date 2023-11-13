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

  function createTweet(string memory _content) external {
    _tweets.push(Tweet(_tweets.length, msg.sender, _content, block.timestamp));
    _tweetsByAuthor[msg.sender].push(_tweets.length);
  }
}
