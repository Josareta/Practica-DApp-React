

import { TokenBalance, Owner } from "../Components"

export default function Home(){
    return (
        <div className="flex flex-col place-items-center">
            <h1>Home</h1>   
            <TokenBalance/>
            <Owner/>
            
        </div>
    )
}
