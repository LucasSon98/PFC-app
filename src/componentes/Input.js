const Input = ({labelName, value}) => {
    return (
        <div className="Input">
            <label htmlFor="Input">{`${labelName}: `}</label>
            <input type="text" name="Input" value={value}/>
        </div>
    );
}
 
export default Input;