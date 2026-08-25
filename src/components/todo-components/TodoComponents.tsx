import './TodoComponents.css'
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, [])


    return (
        <div>
            {
                todos.map(todo =><TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
};