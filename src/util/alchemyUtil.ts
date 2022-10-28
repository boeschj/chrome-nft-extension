import { Network, Alchemy, Nft, } from "alchemy-sdk";
import { NFTMetadata } from "../types/NFTMetadata";
import { convertIPFSToGateway } from "./IPFSUtil";

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const getAlchemyNFTMetadata = async (contractAddress: string, tokenId: string) => {
    try {
        const alchemyMetadata: Nft = await alchemy.nft.getNftMetadata(contractAddress, tokenId);

        const metadata: NFTMetadata = {
            title: !alchemyMetadata.title ? `#${alchemyMetadata.tokenId}` : alchemyMetadata.title, //Many editions use tokenId as title
            imageUrl: convertIPFSToGateway(alchemyMetadata?.rawMetadata?.image ?? '', 'https://ipfs.io'), //Most reliable image source is IPFS URI in raw metadata, grab this and convert to a default gateway
            attributes: alchemyMetadata.rawMetadata?.attributes,
            metadataError: alchemyMetadata.metadataError
        };

        return metadata;

    } catch (error: any) {
        return {
            title: '',
            imageUrl: undefined,
            attributes: undefined,
            metadataError: error
        } as NFTMetadata
    }
};