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
            <div>{title}</div>
            <div>
                <button onClick={() => removeTask() }>Delete</button>
            </div>
        </li>
    )
}