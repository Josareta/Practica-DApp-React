import { useContractRead } from 'wagmi'
import { blockmakerTokenABI } from "../contracts/ABIs"
import { Title } from './ui'
//import { formatEther } from 'viem/utils'

export default function Owner() {
    const { data } = useContractRead({
        abi: blockmakerTokenABI,
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
        functionName: 'owner'
    })
    console.log("Address contract", import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS)
    
    return (
        <div className='bg-white p-4 border shadow rounded-md'>
            <Title>Owner</Title>
            <p className='bg-gray-100 text-zinc-600 p-2 rounded-md text-s'>{data}</p>
                   
        </div>
    )
}