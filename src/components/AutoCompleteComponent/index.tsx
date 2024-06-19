import { useState } from "react";
import './style.css';

const AutoCompleteComponent = ({
    addTodo
}: any) => {
    const [inputText, setInputText] = useState('');
    const handleChange = (e: any) => {
        setInputText(e.target.value);
    }
    const handleSubmit = () => {
        addTodo(inputText);
    }
    return (
        <div className="Autocomplete_Wrapper">
            <input
                placeholder="enter your todo"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
};

export default AutoCompleteComponent;