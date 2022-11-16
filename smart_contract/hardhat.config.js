require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nYSE5JX4kDNhWSU0A1uTk205VrR3kDHz',
      accounts: ['425f4f09494cc63cbf8ccaabb397cbef9eb1b05a1fd85005e920e596d7bb3f99'],
    },
  },
};