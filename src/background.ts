import MainBackground from './background/main.background';

const qVaultMain = (window as any).qVaultMain = new MainBackground();
qVaultMain.bootstrap().then(async () => {
    // Finished bootstrapping
    console.log('Main bootstrapping.');

    //qVaultMain.ipfsService.test();

});
