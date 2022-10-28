import { useState } from "react";
import NFTFrame from "./components/NFTFrame";
import NFTProperties from "./components/NFTProperties";
import { NFTMetadata } from "./types/NFTMetadata";
import { getAlchemyNFTMetadata } from "./util/alchemyUtil";

const App = () => {
  const [contractAddress, setContractAddress] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');
  const [metadata, setMetadata] = useState<NFTMetadata>();
  const [loading, setLoading] = useState<boolean>(false);

  const getNFTMetadata = (): void => {
    setLoading(true);
    getAlchemyNFTMetadata(contractAddress, tokenId)
      .then((metadata: NFTMetadata) => {
        metadata.metadataError ? alert(`Error: ${metadata.metadataError}`) : setMetadata(metadata);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen w-full p-2 space-y-3">

      {metadata ?
        <>
          <NFTFrame imageUrl={metadata.imageUrl} />
          <NFTProperties title={metadata.title} attributes={metadata.attributes} />
        </>
        :
        <div className="h-[475px] border border-sky-400 text-center align-middle rounded-xl py-[220px] text-2xl font-bold px-2">{loading ? 'loading...' : 'Search for a contract address and tokenId to view a NFT'}</div>
      }

      <div className="flex justify-between">
        <div className="flex flex-row space-x-2 w-full">
          <input className="border border-sky-400 rounded-xl w-4/6 h-10 p-5" placeholder="Contract Address" disabled={loading} onChange={(e) => setContractAddress(e.target.value)} />
          <input className="border border-sky-400 rounded-xl w-2/6 h-10 p-5" placeholder="Token ID" disabled={loading} onChange={(e) => setTokenId(e.target.value)} />
        </div>
      </div>
      <button className="rounded-xl w-full bg-sky-400 text-white px-3 h-10 text-center align-middle text-lg font-bold" disabled={loading} onClick={() => getNFTMetadata()}>Search</button>
    </div>
  );
}

export default App;