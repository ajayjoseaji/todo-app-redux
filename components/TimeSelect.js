import { useState } from "react"
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export const TimeSelect = () => {
    const [time, setTime] = useState('')
    console.log(time)
    return (
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
    )
}