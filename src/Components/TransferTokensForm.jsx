import {Button,TextInput, Title } from './ui'
import { useState } from 'react'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction} from 'wagmi'
import { blockmakerTokenABI } from '../contracts/ABIs'

export default function TransferTokensForm (){
    const[to,setTo]= useState("")
    const[amount,setAmount]= useState("")

    const { config } = usePrepareContractWrite({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
        abi: blockmakerTokenABI,
        functionName: 'transfer',
        //BigInt representa valores numéricos muy grandes, de una forma sencilla
        args: [to, BigInt (amount * 10 ** 18)]
      })

    const { data: writeData, write } = useContractWrite(config)

    const { isLoading: isTransactionLoading,
        isSuccess: isTransactionSucess,
        isError: isTrransactionError
    } = useWaitForTransaction({
        hash: writeData?.hash
    })
    
    const handlerToInputChange = (event) => {
        setTo(event.target.value)
    }

    const handlerAmountChange = (event) => {
        setAmount(event.target.value)
    }
    
    
    return(
        <section className='bg-white p-4 border shadow rounded-md '>
            <Title>TransferFrom</Title>
            <form className='grid gap-4'>
                <TextInput type="Text"  placeholder="To" onChange={handlerToInputChange} />
                <TextInput type="number"  placeholder="Amount" onChange={handlerToInputChange} />
                <Button disabled={!write || isTransactionLoading} onClick={() => write?.()} isLoading={isTransactionLoading} >{isTransactionLoading? "Transfiriendo BM Tokens..." : " Transferir BM Tokens"} </Button>

            </form>
            
        </section>
    )
}