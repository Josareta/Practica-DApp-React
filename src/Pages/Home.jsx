import { useAccount } from "wagmi"
//import LoadingSpinner from "../Components/ui/LoadingSpinner"
//import Button from "../Components/ui/Button"
import { Button, ErrorInfo } from "../Components/ui"

export default function Home(){
    const { address, isConnecting, isDisconnected } = useAccount()
    if (isConnecting) return <div>Connecting...</div>
    if (isDisconnected) return <div>Disconnected</div>
    
    return (
        <div>
            <h1>Home</h1>
            <div>Connected Wallet: {address}</div>    
            <Button isLoading={true} >Mi componente botón</Button>
            <ErrorInfo message="Este es un componente para mostrar mensajes de error"/>
        </div>
    )
}
