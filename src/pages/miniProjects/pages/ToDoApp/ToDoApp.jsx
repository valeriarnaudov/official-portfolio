import React, { useState } from "react";
import "./toDoApp.css";
import { AiTwotoneCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function ToDoApp() {
    const [todos, setTodos] = useState([
        { text: "Learn React", completed: false },
        { text: "Learn GraphQL", completed: false },
        { text: "Write a to-do app", completed: false },
    ]);
    const [inputValue, setInputValue] = useState("");

    function handleTodoClick(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleAddTodo(e) {
        e.preventDefault();
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue("");
    }

    function handleDeleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="todo-app">
            <h1 className="todo-title">To-do List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your task here..."
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos
                    .filter((todo) => !todo.completed)
                    .map((todo, index) => (
                        <li
                            key={index}
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            <span
                                onClick={() => handleTodoClick(index)}
                                className="checkbox"
                            >
                                <AiTwotoneCheckCircle />
                            </span>{" "}
                            {todo.text}
                            <span
                                role="img"
                                aria-label="delete"
                                className="delete-icon"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                <BsTrash />
                            </span>
                        </li>
                    ))}
            </ul>
            <h2 className="completed-title">Completed</h2>
            <ul>
                {todos
                    .filter((todo) => todo.completed)
                    .map((todo, index) => (
                        <li
                            key={index}
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            <span
                                onClick={() => handleTodoClick(index)}
                                className="done"
                            >
                                <AiFillCheckCircle />
                            </span>{" "}
                            {todo.text}
                            <span
                                role="img"
                                aria-label="delete"
                                className="delete-icon"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                <BsTrash />
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ToDoApp;
