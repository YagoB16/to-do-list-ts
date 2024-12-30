import { useState } from 'react'
import { Button } from './components/Button'
import { EmptyCell } from './components/EmptyCell'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

export function App() {
  const [tasks, setTasks] = useState<string[]>(['adsa'])

  return (
    <>
      <Header />
      <div className="max-w-6xl w-50p -mt-8 grid grid-cols-[1fr_80px] gap-3 items-start mx-auto">
        <Input />
        <Button />
      </div>
      <main className="flex justify-center items-center">
        <div className="w-2/4 pt-16 flex flex-col items-center gap-4">
          <div className="w-92p h-4 flex gap-2 items-center">
            <div className="px-1  w-full rounded-lg text-sm flex items-center justify-between gap-1">
              <div className="text-sm p-1 flex gap-2 items-center">
                <div className="text-sm font-bold text-[#4EA8DE] text-inter flex gap-2 items-center p-1 ">
                  <span>Tarefas criadas</span>
                  <span className="px-2 rounded-lg text-white bg-[#333333]">
                    0
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#8284FA] font-bold text-inter p-2 flex gap-2 items-center">
                <span>Concluídas</span>
                <span className="px-2 rounded-lg  text-white bg-[#333333]">
                  0
                </span>
              </div>
            </div>
          </div>

          {tasks.length > 0 ? <Tasks tasks={tasks} /> : <EmptyCell />}
        </div>
      </main>
    </>
  )
}
