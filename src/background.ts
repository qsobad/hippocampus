import MainBackground from './background/main.background';

const qVaultMain = (window as any).qVaultMain = new MainBackground();
qVaultMain.bootstrap().then(async () => {
    // Finished bootstrapping
    // console.log(qVaultMain.ipfsService);

    console.log('Main bootstrapping.');
    qVaultMain.ipfsService.test();

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
