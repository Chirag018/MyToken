const { expect } = require('chai');
const { ethers } = require('hardhat');

// test case for MyToken contract:
// 1. deploy MyToken contract
// 2. mint function test cases
// 3. confiscation test cases


describe('MyToken', () => {
  let counter;

  console.log('inside deployment');

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory('MyToken');
    counter = await Counter.deploy('CM', 'Token', 0, 1000, 0xDDb56b51723EB20DF4D835AdB5cEd7b67D354Df9);

  })
  console.log('beforeeach');
  describe('Deployment', () => {

    //console.log('inside deployment');
    it('sets the initial symbol', async () => {
      const symbol = await counter.symbol();
      expect(symbol).to.equal('CM');
    })

    it('sets the initial name', async () => {
      const name = await counter.name();
      expect(name).to.equal('Token');
    })

    it('sets the inital decimal', async () => {
      const decimals = await counter.decimals();
      expect(decimals).to.equal(0);
    })

    it('sets the initial total supply', async () => {
      const totalSupply = await counter.totalSupply();
      expect(totalSupply).to.equal(1000);
    })

    it('sets the initial minter', async () => {
      const minter = await counter.minter();
      expect(minter).to.equal(0xDDb56b51723EB20DF4D835AdB5cEd7b67D354Df9);
    })

  })

})