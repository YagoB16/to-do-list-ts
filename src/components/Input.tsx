import { ChangeEvent, FormEvent, useState } from "react";
import { CgAdd } from "react-icons/cg";

interface InputProps {
    onCreateNewTask: (newTask: string) => void;
}

export function Input({ onCreateNewTask }: InputProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        if (newTaskText.trim() === '') return;
        onCreateNewTask(newTaskText);
        setNewTaskText('');
    }
    return (
        <>
            <form onSubmit={handleCreateNewTask} className={`grid grid-cols-[2fr_100px] gap-3`}>
                <input
                    type="text"
                    name="task"
                    className={`bg-[#262626] w-full border-transparent outline-none focus:ring-0 text-gray-300 text-sm rounded-lg p-4`}
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                />

                <button
                    type="submit"
                    className={`bg-[#1E6F9F] hover:bg-[#4EA8DE] h-12 text-[#F2F2F2] rounded-lg p-2  flex items-center gap-2`}>
                    Criar
                    <CgAdd
                        size={20}
                    />
                </button>
            </form>
        </>
    )
}
