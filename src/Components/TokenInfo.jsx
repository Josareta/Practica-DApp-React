import { Title } from './ui'
import { useToken } from 'wagmi'
import PropTypes from 'prop-types'

function TokenInfoItems ({etiqueta, valor}){
    return (
        <li  className='bg-gray-100 text-zinc-600 p-1 rounded-md text-s mb-2 flex'>
            <span className='font-bold capitalize'>{etiqueta} </span>
            <p className='px-2'>{valor}</p>
        </li>

    )
}

TokenInfoItems.propTypes = {
    etiqueta: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}

export default function TokenInfo(){
    const { data } = useToken({
       address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    })
  
    return(  
        <div className='bg-white p-4 border shadow rounded-md'>
            <Title>Token Information</Title>
            <ul>
                <TokenInfoItems etiqueta="Address:" valor={data?.address}/>
                <TokenInfoItems etiqueta="Nombre:" valor={data?.name}/>
                <TokenInfoItems etiqueta="Símbolo:" valor={data?.symbol}/>
                <TokenInfoItems etiqueta="Decimales:" valor={data?.decimals}/>
                <TokenInfoItems etiqueta="Supply total:" valor={data?.totalSupply.formatted}/>
            </ul>
        </div>
    )
}