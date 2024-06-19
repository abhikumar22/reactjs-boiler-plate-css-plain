import { useRef, useState } from "react";
import './style.css';

const TodoBox = ({
    text,
    handleDelete,
}: any) => {

    return (
        <div className="TodoBox_Wrapper">
            {text}
            <button
                className="myBtn"
                onClick={() => handleDelete(text)}>
                Delete this todo
            </button>
        </div>
    )
};

export default TodoBox;