import { ConnectKitProvider} from "connectkit";
import {Home} from './Pages'
import {AppLayout} from './Components/UI/Layouts'
import { WagmiConfig, createConfig } from "wagmi";
import {config} from "./config/wagmi"
   

function App() { 
  const walletConnectProjectId = import.meta.env.REACT_APP_WALLET_CONNECT_PROJECT_ID
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="midnight">
        <AppLayout>
          <Home/>
        </AppLayout> 
      </ConnectKitProvider>
    </WagmiConfig>
    
  
  )
}

export default App
