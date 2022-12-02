import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../slices/todoSlice";

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
        <div>
            <input type="text" 
                placeholder="Type todo..."
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
            />
            <button type="submit" onClick={onSubmit}>Add</button>
        </div>
    )
}