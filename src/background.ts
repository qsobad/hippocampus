import MainBackground from './background/main.background';
// import MetaMaskOnboarding from '@metamask/onboarding';

const bitwardenMain = (window as any).bitwardenMain = new MainBackground();
bitwardenMain.bootstrap().then(async () => {
    // Finished bootstrapping
    console.log(bitwardenMain.ipfsService);


    // const createMetaMaskProvider = require('metamask-extension-provider');
    //
    // const provider = createMetaMaskProvider();
    //
    // if (provider) {
    //     console.log(provider.isMetaMask);
    //     const accounts = await provider.request({method: 'eth_requestAccounts'});
    //     const account = accounts[0];
    //     console.log(provider.isConnected());
    //     console.log(account);
    // }


});
