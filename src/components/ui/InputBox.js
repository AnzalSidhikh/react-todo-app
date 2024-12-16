import React from "react";
import enhance from "../hoc/wrapInputBox";

function InputBox(props) {
    const {
        value,
        handleChange,
        handleKeyUp,
        handlePriorityChange,
        handleDueDateChange,
        priority,
        dueDate,
    } = props;

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New Todo"
            />
            <select
                value={priority}
                onChange={handlePriorityChange}
                className="form-control"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={handleDueDateChange}
                placeholder="Due Date"
            />
        </div>
    );
}

export default enhance(InputBox);
