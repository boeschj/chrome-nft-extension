import { Network, Alchemy, Nft } from "alchemy-sdk";

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
};

export const alchemy = new Alchemy(settings);

const getNFTMetadata = async (contractAddress: string, tokenId: string) => {
    const metadata: Nft = await alchemy.nft.getNftMetadata(contractAddress, tokenId);

    return metadata;
}