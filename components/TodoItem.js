import { useDispatch } from "react-redux"
import { deleteTask } from "../slices/todoSlice"
import dayjs from 'dayjs'
import { useEffect } from "react"


export const TodoItem = ({ id, title, time}) => {

    const dispatch = useDispatch()

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    useEffect(() => {
        console.log('time',time)
        const interval = setInterval(() => {
            const isAfter = dayjs().isAfter(dayjs(time))
            console.log({isAfter})
            if (isAfter){
                removeTask()
            } 
          }, 1000);

          return () =>{
            clearInterval(interval);
          }
    },[time])

 


    return (
        <li>
            <div style={{display: "inline-flex"}}>
                {title} <br />
                <code>deadline: {time}</code>
                <button onClick={() => removeTask() }>Delete</button>
            </div>
        </li>
    )
}