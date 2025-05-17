import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const init = () => { 
        return JSON.parse( localStorage.getItem('todos')) || [];
    }
    const [todos, dispatch ] = useReducer(todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos ));
    }, [todos]);
    
    const handleNewTodo = ( todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch( action);        
    }

    const handleDeleteTodo = ( id) => {
        // console.log({ id });
        dispatch({ 
            type: '[TODO] Remove todo',
            payload: id
        });
    }
    const honToggleTodo = ( id) => {
        console.log({ id });
        dispatch({ 
            type: '[TODO] Toggle todo',
            payload: id
        });
    }

    const pendingTodosCount = todos.filter (todo => !todo.done).length;
    const todosCount =todos.length;
    return {
        todos,
        handleDeleteTodo,
        honToggleTodo,
        handleNewTodo,
        todosCount,
        pendingTodosCount
    }
}
