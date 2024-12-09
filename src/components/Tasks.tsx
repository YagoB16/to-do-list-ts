
export function Tasks() {

    return (
        <>
            <div className='w-2/4 flex flex-col gap-4'>
                <div className="w-45p flex gap-2 items-center">
                    <div className="px-3 py-1.5 w-full rounded-lg text-sm flex items-center justify-between">
                        <div className="text-sm p-1 font-bold text-[#4EA8DE]">
                            Tarefas criadas
                            <span className="px-3 text-white">0</span>
                        </div>
                        <div className="text-sm text-[#8284FA] font-bold">
                            Concluídas
                            <span className="px-3 text-white">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
