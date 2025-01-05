import { Trash } from 'phosphor-react';

export interface Tasks {
    task?: string | string[],
}


export function List({ task }: Tasks) {


    return (
        <>
            <div className={`w-full h-20 rounded-lg flex justify-between items-center p-2 bg-[#262626]  first:mt-4 last:mb-8`}>
                <div className={`w-6 h-6 -mt-4 ml-4 flex-none`}>
                    <input className={``} type="checkbox" name="" id="" />
                </div>
                <p className={`px-3 flex-1 text-[#F2F2F2]`}>{task}</p>
                <button title='Deletar task' className={`w-6 h-6 -mt-4 pr-4 pb-8 flex-none`}>
                    <Trash size={24}
                        className={`text-gray-500 hover:[color:red]`} />
                </button>
            </div>
        </>
    )
}
