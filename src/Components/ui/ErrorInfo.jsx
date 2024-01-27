import Proptypes from 'prop-types'
import { MdInfoOutline } from "react-icons/md";

export default function ErrorInfo({message}) {
    return <div className= "flex items-center bg-red-200 p-2 rounded w-fit ">
        <MdInfoOutline className='text-red-500'></MdInfoOutline>
        <p className="text-red-500 text-xs p-1">{message}</p>
    </div>    
}
ErrorInfo.PropTypes = {
    message: Proptypes.string.isRequired

}
