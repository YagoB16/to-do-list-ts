import { Trash } from 'phosphor-react';




export function List() {


    return (
        <>
            <div className="w-92p rounded-lg flex justify-center items-center py-4  gap-2 bg-[#262626]">
                <input className="rounded-xl" type="checkbox" name="" id="" />
                <p className="px-3 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem aliquid dolor porro libero nostrum soluta quibusdam iure magni, itaque vitae? Saepe at suscipit nulla itaque eligendi beatae alias nemo a.
                    Eligendi modi officia voluptatibus expedita</p>
                <button
                    title='Deletar task'>
                    <Trash size={24} />
                </button>
            </div>
        </>
    )
}
