import { useDispatch } from "react-redux"
import { deleteTask } from "../slices/todoSlice"


export const TodoItem = ({ id, title }) => {

    const dispatch = useDispatch()

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }

    return (
        <li>
            <div style={{display: "inline-flex"}}>
                {title} <br />
                {/* <code>deadline: 12:00 am</code> */}
                <button onClick={() => removeTask() }>Delete</button>
            </div>
        </li>
    )
}