import { useState } from "react";
import NFTFrame from "./components/NFTFrame";
import NFTProperties from "./components/NFTProperties";

const App = () => {
  const [contractAddress, setContractAddress] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');

  return (
    <div className="h-screen w-full p-2 space-y-3">
      <NFTFrame mediaUrl="" />
      <NFTProperties title="NFT Title" properties={[{ title: 'test', name: 'test name', rarity: 'test rarity of 71%' }, { title: 'test', name: 'test name', rarity: 'test rarity of 71%' }, { title: 'test', name: 'test name', rarity: 'test rarity of 71%' }, { title: 'test', name: 'test name', rarity: 'test rarity of 71%' }, { title: 'test', name: 'test name', rarity: 'test rarity of 71%' }]} />
      <div className="flex justify-between">
        <div className="flex flex-row space-x-2 w-full">
          <input className="border border-blue-400 rounded-xl w-4/6 h-10 p-5" placeholder="Contract Address" onChange={(e) => setContractAddress(e.target.value)} />
          <input className="border border-blue-400 rounded-xl w-2/6 h-10 p-5" placeholder="Token ID" onChange={(e) => setTokenId(e.target.value)} />
        </div>
      </div>
      <button className="rounded-xl w-full bg-blue-400 text-white px-3 h-10 text-center align-middle text-lg font-bold" onClick={() => { console.log('clicked') }}>Search</button>
    </div>
  );
}

export default App;
