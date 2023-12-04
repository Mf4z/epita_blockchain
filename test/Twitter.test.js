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
  });

  it('should create a tweet', async () => {
    await twitter.createTweet('Hello, world!');
    const tweets = await twitter.getTweets();

    expect(tweets.length).to.equal(1);
    expect(tweets[0].content).to.equal('Hello,world!');
  });

  it("should be able to edit one's own tweet", async () => {
    await twitter.createTweet('Hello, world!');
    await twitter.editTweet(0, 'Goodbye, world!');
    const tweets = await twitter.getTweets();

    expect(tweets.length).to.equal(1);
    expect(tweets[0].content).to.equal('Goodbye,world!');
  });

  // it('should be erased', () => {});
});
