import { useState } from "react"
import { useDispatch } from "react-redux";
// import TimePicker from "react-time-picker/dist/entry.nostyle";
import { addTask } from "../slices/todoSlice";
import { TimeSelect } from "./TimeSelect";

export const AddTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const onSubmit = () => {
		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

    return (
        <div style={{display: "inline-flex"}}>
            <input type="text" 
                placeholder="Type todo..."
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
            />
            <TimeSelect />
            <button style={{cursor: "pointer"}} type="submit" onClick={onSubmit}>Add</button>
                {/* <TimePicker onChange={setTime} value={time}/>  */}
        </div>
    )
}