
# 海马体 天池比赛demo

## Hippocampus: Secure Distributed Password manager
Hippocampus help you manager your password without storing them to any centralized third party, i.e. you completely own your data.

## Introduction

This DApp demo how to store personal data securely and permanently with the help of decentralized application.

- It uses Metamask to login and encrypt your vault.
- It uses IPFS to store your vault which has been encrypted before uploading.
- It uses bitWarden as codebase for basic functionality.
- It is solely for demo purpose and should not be used in any serious practice. 

### Technical Flow
1. You will have to login with metamask to use the extension, the wallet will provide ETH account and public key for encryption. It also will download the encrypted vault from IPFS for use.
2. When you login into any website, Hippocampus will ask if you would like to store the password. Hippocampus will then encrypt your password and store into password vault.
3. From time to time, the vault will be encrypted by the wallet and then synchronized to IPFS for permanent storage.

### Further Development (Technical)
- Store more personal information, like bookmarks, notes, etc
- Retrieve vaultCid from blockchain with authentication and provide other functionality such as authorization for use of data
- Use aes encryption in ciphers
- Provide local cache of vault, to avoid network issues
- Support more wallets
