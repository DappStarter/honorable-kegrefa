require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pulp grace describe off smart'; 
let testAccounts = [
"0x749532778de605f212ea8c4e167f1078819b9097f0f19e43ee08dc6d09fb423f",
"0x315755d02b91698d6302f3690cbc318a699abb6a35f291f8f36da3d92f09d895",
"0x8ada570f48a67b116d633a0f9edb1d8ad73c0b8390f42ae2d359730798c06d54",
"0xdbab29acc3bd614ee6bddd669979e9be602869f9d28818a27b33f3d999020552",
"0xd4da2d1911f8dc25ae804ee460990afcd4d87b0bee54568f448c217b4273fb7a",
"0x0ab2c41ed1e0e95760a28ce771b994eb2a3e84f9f3451d5f22dfc8d097c7dfe6",
"0x5b1490c7898847a4db86ca416982f9c6bb6e0e7fea22d78997f41dd5fe1be1b4",
"0x0ba2564f59dd1dec748f9ac1e03350abbc7190df0a4420e2082f4e6efe98d1ee",
"0x06c1d0fb0dbb922a383efd1fd7d6608f653a03279a543175e3bd8212bcc09f94",
"0x9473aea1ee3150b731dfbfff42645386728d54096d4f1f7e6a5b2b89d76577f3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

