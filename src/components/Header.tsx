
import rocketLogo from '../assets/rocket.svg'
export function Header(){
    return (
        <>
            <header className='flex justify-center items-center align-middle h-48 py-5 bg-zinc-950'>
                <img src={rocketLogo} alt="" className='h-8 px-3 ' />
                <strong className='text-3xl font-bold'>TODO</strong>
            </header>
        </>
    )
}
