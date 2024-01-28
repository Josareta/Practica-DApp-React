import PropTypes from "prop-types"
export default function TextImput ({type,onChange, value, placeholder,disabled}){
    return (
        <input 
            type={type} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder} 
            disabled={disabled}
            className="border border-gray-300 rounded-md w-full px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed"
             
        />
    )
}

TextImput.propTypes = {
    type: PropTypes.oneOf(["text","password","email","number"]),
    onchange: PropTypes.func,
    value: PropTypes.oneOfType ([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool

}