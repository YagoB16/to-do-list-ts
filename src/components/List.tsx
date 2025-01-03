import { Trash } from 'phosphor-react';




export function List() {


    return (
        <>
            <div className="w-full h-20 rounded-lg flex justify-between items-center p-2 bg-[#262626]  first:mt-4 last:mb-8">
                <div className='w-6 h-6 -mt-4 ml-4 '>
                    <input className=" " type="checkbox" name="" id="" />
                </div>
                <p className="pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercita Los polos hermanos</p>
                <button title='Deletar task' className='w-6 h-6 -mt-4 pr-4 pb-8'>
                    <Trash size={24}
                        className="text-gray-500 hover:[color:red]" />
                </button>
            </div>
        </>
    )
}
