require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note payment column hidden entire surge ski'; 
let testAccounts = [
"0xdf0582b1d247b804d2a39eb7719afcc015bee0d33421a2f3f57e0e665845d0dc",
"0x04d3bbd8196d7a831799bba3c90aeed393904bb863815fdd50048f7fc59a1f97",
"0x2c8c737761ab37bec0c8b66f563775546a068db1842efc554a867835c2b3851b",
"0x806887ccd8406a144103b39ae793a4419588d1c36fadd720125549b83f1e7e1d",
"0x54a5ad383d179f1e323a48fd39fe287e2209dad9375f6a9566cd175bb6fa84eb",
"0xef7feee22806268038e7cf059cbf95c927584cd17171226b4c34dabe434f9aee",
"0x989b6896f489f0aa0254f39049d781dd5a210a5ec475d81ce1a966e0ccd7ed0d",
"0x582a03f814d688bc905f0de06204ae90d7caf8cd90e0a60f249de45330479b4e",
"0x52d8788794c2f3360b180d33ac9a22890e6b40847b0fd6d20126dac918171178",
"0x4258f1797f6228099e1ba5e689dda4b14ade3800577898e1d6aeb15e0923ce37"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
