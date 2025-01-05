import Clipboard from "../assets/Clipboard.svg";
import { EmptyCell } from "./EmptyCell";
import { List } from "./List";

interface TasksProps {
    tasks: string[];
}

export function Tasks({ tasks }: TasksProps) {
    const today = new Date();
    const hasTasks = true;
    return (
        <>
            <div className='w-2/4 pt-16 flex flex-col items-center gap-4'>
                <div className="w-92p h-4 flex gap-2 items-center">
                    <div className="px-1  w-full rounded-lg text-sm flex items-center justify-between gap-1">
                        <div className="text-sm p-1 flex gap-2 items-center">
                            <div className="text-sm font-bold text-[#4EA8DE] text-inter flex gap-2 items-center p-1 ">
                                <span>Tarefas criadas</span>
                                <span className="px-2 rounded-lg text-white bg-[#333333]">0</span>
                            </div>
                        </div>
                        <div className="text-sm text-[#8284FA] font-bold text-inter p-2 flex gap-2 items-center">
                            <span>Concluídas</span>
                            <span className="px-2 rounded-lg  text-white bg-[#333333]">0</span>
                        </div>
                    </div>
                </div>
                <div className="w-92p flex flex-col items-center gap-4 rounded-lg bg-transparent border-t-2 border-[#80808048]  ">
                    {!hasTasks ? (
                        <EmptyCell />) : (
                        tasks.map((task, index) => (
                            <List
                                key={index}
                                task={task}
                            />
                        )))
                    }
                </div>
            </div>
        </>
    )
}
