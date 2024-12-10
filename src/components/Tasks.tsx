
export function Tasks() {

    return (
        <>
            <div className='w-2/4 flex flex-col items-center gap-4'>
                <div className="w-92p flex gap-2 items-center">
                    <div className="px-1 py- w-full rounded-lg text-sm flex items-center justify-between gap-1">
                        <div className="text-sm p-1 flex gap-2 items-center font-bold text-[#4EA8DE]">
                            <div className="text-sm p-1 flex gap-2 items-center font-bold text-[#4EA8DE]">
                                <span>Tarefas criadas</span>
                                <span className="px-3 rounded-md text-white bg-[#333333]">0</span>
                            </div>
                        </div>
                        <div className="text-sm p-2 flex gap-2 items-center text-[#8284FA] font-bold">
                            <span>Concluídas</span>
                            <span className="px-3 rounded-md  text-white bg-[#333333]">0</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-t-2 border-black rounded-md w-92p">
                   
                </div>
            </div>
        </>

    )
}
