import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../slices/todoSlice";

export const AddTodo = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

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
                onChange={(e) => {setValue(e.target.value)}}
            />
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}