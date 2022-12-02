import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

export const TodoList = () =>{
    
    const todos = useSelector((state) => {
        return state.tasks;
    })

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} title={todo.name} />
                ))}
            </ul>
        </div>
    )
}