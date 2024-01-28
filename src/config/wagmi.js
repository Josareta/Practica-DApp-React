
import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { sepolia} from "wagmi/chains";
import { mainnet } from '@wagmi/core/chains';

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,

    // Required
    appName: "BlockMaker ERG-20 App",
    chains: [sepolia, mainnet]
  
    // Optional
    //appDescription: "Your App Description",
    //appUrl: "https://family.co", // your app's url
    //appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
