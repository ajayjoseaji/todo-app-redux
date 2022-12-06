import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../slices/todoSlice";

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const AddTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    // console.log(value)

    const [time, setTime] = useState('')
    //console.log(time)

    const onSubmit = () => {
		dispatch(
			addTask({
				task: value,
                time: new Date(time).toString() 
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                    <div  style={{background: "#3B3B3B"}}  >
                        <TimePicker value={time}
                        label="Select a deadline"
                        onChange={(newTime) => {setTime(newTime)} }
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </Stack>
            </LocalizationProvider>
            <button style={{cursor: "pointer"}} type="submit" onClick={onSubmit}>Add</button>
        </div>
    )
}