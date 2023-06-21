import './CheckBox.scss'

const Checkbox = ({tag, toggle, toggleHandler}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={tag} name={tag} value={tag} checked={toggle} onChange={toggleHandler}/>{tag}
        </div>
    );
}
 
export default Checkbox;
