const Input = ({labelName, value, id, inputChangeHandler}) => {
    const InputBlurHandler = (e) => {
        if(e.target.value === ""){
            e.target.value = e.target.defaultValue;
        }
    }
    return (
        <div className="Input">
            <label htmlFor="Input">{`${labelName}: `}</label>
            <input id={id} type="text" name="Input" onBlur={InputBlurHandler} defaultValue={value} onChange={inputChangeHandler}/>
        </div>
    );
}
 
export default Input;