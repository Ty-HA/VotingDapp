import { createPublicClient, http } from "viem";
import { hardhat, sepolia } from 'viem/chains';

//const RPC = process.env.NEXT_PUBLIC_ALCHEMY_RPC || "";
//const RPC = process.env.NEXT_PUBLIC_ALCHEMY_RPC || "http://127.0.0.1:8545/";
//const RPC = "http://localhost:8545/";

export const publicClient = createPublicClient({
//    chain: sepolia,
//transport: http(RPC),

    chain: hardhat, 
    transport: http(),
})
