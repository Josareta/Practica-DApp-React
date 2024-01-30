import {Button,TextInput, Title } from './ui'
import { useState } from 'react'

export default function TransferTokensForm (){
    const[to,setTo]= useState("")
    const[amount,setAmount]= useState("")
    
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
                <TextInput type="number"  placeholder="To" onChange={handlerToInputChange} />
                <Button>Transfer </Button>
            </form>
            
        </section>
    )
}