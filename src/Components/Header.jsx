import {ConnectKitButton } from "connectkit";
export default function Header(){
    return <header className="flex px-8 py-4 border-b-2 justify-between items-center bg-white" >
        {/*Logo para móvil*/}
        <img src="/icono.png" className="sm:hidden" alt="BlockMaker logo" width={45}/>
        {/*Logo para desktop*/}
        <img src="/logo-blockmaker.png" className="hidden sm:flex" alt="BlockMaker logo" width={200}/>

        <ConnectKitButton showBalance/>
        
    </header>

}