
import { useState } from 'react';
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

export function App() {

    const [tasks, setTasks] = useState<string[]>([])
    
    // Função para adicionar uma nova tarefa
    function handleCreateNewTask(newTask: string) {
        setTasks(prevTasks => [...prevTasks, newTask]);
    }
    return (
        <>
            <Header />
            <div className={`max-w-6xl w-50p -mt-8 items-start mx-auto`}>
                <Input onCreateNewTask={handleCreateNewTask} />
            </div>
            <main className={`flex justify-center items-center`}>
                <Tasks tasks={tasks} />
            </main>
        </>
    )
}
