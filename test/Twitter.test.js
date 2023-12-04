const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const { ethers } = require('hardhat');

describe.only('Twitter', () => {
  let twitter;
  let owner;
  let otherAccount;

  beforeEach(async () => {
    [owner, otherAccount] = await ethers.getSigners();

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
    expect(tweets[0].content).to.equal('Hello, world!');
  });

  it("should be able to edit one's own tweet", async () => {
    await twitter.createTweet('Hello, world!');
    await twitter.editTweet(0, 'Goodbye, world!');
    const tweets = await twitter.getTweets();

    expect(tweets.length).to.equal(1);
    expect(tweets[0].content).to.equal('Goodbye, world!');
  });

  it("should not be able to edit someone else's tweet", async () => {
    await twitter.connect(owner).createTweet('Hello, world!');

    await expect(
      twitter.connect(otherAccount).editTweet(0, 'Goodbye, world!'),
    ).to.be.revertedWith('You are not the author of this tweet');
  });

  it('should not be able to edit a deleted tweet', async () => {
    await twitter.createTweet('Hello, world!');
    await twitter.deleteTweet(0);

    await expect(twitter.editTweet(0, 'Goodbye, world!')).to.be.revertedWith(
      'The tweet is deleted',
    );
  });

  // it('should be erased', () => {});
});
