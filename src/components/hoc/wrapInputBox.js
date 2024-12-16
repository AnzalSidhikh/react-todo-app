import KeyCode from "keycode-js";
import { compose, withState, withHandlers } from "recompose";

export default compose(
    withState("value", "setValue", (props) => {
        return props.value || "";
    }),
    withState("priority", "setPriority", "medium"),
    withState("dueDate", "setDueDate", ""),
    withHandlers({
        handleKeyUp:
            ({
                addNew,
                setValue,
                priority,
                dueDate,
                setPriority,
                setDueDate,
            }) =>
            (e) => {
                const text = e.target.value.trim();

                if (e.keyCode === KeyCode.KEY_RETURN && text) {
                    addNew(text, priority, dueDate);
                    setValue("");
                    setPriority("medium");
                    setDueDate("");
                }
            },
        handleChange:
            ({ setValue }) =>
            (e) => {
                setValue(e.target.value);
            },
        handlePriorityChange:
            ({ setPriority }) =>
            (e) => {
                setPriority(e.target.value);
            },
        handleDueDateChange:
            ({ setDueDate }) =>
            (e) => {
                setDueDate(e.target.value);
            },
    })
);
