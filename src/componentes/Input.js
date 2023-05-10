const Input = ({labelName}) => {
    return (
        <div className="Input">
            <label htmlFor="Input">{`${labelName}: `}</label>
            <input type="text" name="Input" />
        </div>
    );
}
 
export default Input;