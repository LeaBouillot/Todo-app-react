import { AiOutlinePlusCircle } from "react-icons/ai"
import "../styles/header.css"
import { useState } from "react"

export function Header({ onAddTask }) {

    const [title, setTitle] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        onAddTask(title)
        setTitle("")
    }

    function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    return (
        <header className='header'>
            <img src="../assets/todoLogo.svg" alt="todo logo" />

            <form className="newTaskForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a task" value={title} onChange={onChangeTitle} />
                <button>
                    Add
                    <AiOutlinePlusCircle size={30} />
                    </button>
            </form>
        </header>
    )
}