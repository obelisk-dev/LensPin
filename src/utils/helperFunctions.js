export const ipfsProvider = 'https://ipfs.io/ipfs/'

export const getIpfsHash = (url) => {
    return (url.split('//')[1])
}

export const formIpfsUrl = (hash, gateway = ipfsProvider) => {
    return (gateway + hash)
}

export const constainsIpfs = (url = '') => {
    return (url.includes('ipfs') || url.includes('IPFS') || url.includes('Ipfs'))
}

