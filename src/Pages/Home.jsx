

import { TokenBalance, Owner, TokenInfo,TransferTokensForm } from "../Components"

export default function Home(){
    return (
        <div className="flex flex-col place-items-center">
            <h1 className="text-4xl py-10">BlockMaker ERC20 Token</h1>   
            <TokenBalance/>
            <Owner/>
            <TokenInfo/>
            <TransferTokensForm/>
            
        </div>
    )
}
