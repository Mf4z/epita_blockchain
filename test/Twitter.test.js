const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const { ethers } = require('hardhat');

describe.only('Twitter', () => {
  let twitter;

  beforeEach(async () => {
    const Twitter = await ethers.getContractFactory('Twitter');
    twitter = await Twitter.deploy();
  });

  it('should get all the tweets', async () => {
    const tweets = await twitter.getTweets();
    expect(tweets.length).to.equal(0);

    await twitter.createTweet('Hello, world!');
    const tweets2 = await twitter.getTweets();
    expect(tweets2.length).to.equal(1);
  });

  // it('should be erased', () => {});
});
