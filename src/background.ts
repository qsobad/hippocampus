import MainBackground from './background/main.background';
import Eth from 'ethjs';

const bitwardenMain = (window as any).bitwardenMain = new MainBackground();
bitwardenMain.bootstrap().then(() => {
    // Finished bootstrapping
    console.log(bitwardenMain.ipfsService);

    const createMetaMaskProvider = require('metamask-extension-provider');
    console.log(createMetaMaskProvider);

    const provider = createMetaMaskProvider();

    if (provider) {
        console.log('provider detected', provider);
        const eth = new Eth(provider);
        eth.accounts()
            .then((accounts) => {
                console.log(`Detected MetaMask account ${accounts[0]}`);
            });

        provider.on('error', (error) => {
            if (error && error.includes('lost connection')) {
                console.log('MetaMask extension not detected.');
            }
        });

    } else {
        console.log('MetaMask provider not detected.')
    }

    provider.on('error', (error: any) => {
        console.log(error);
    });

    console.log(provider.isMetaMask);

});
