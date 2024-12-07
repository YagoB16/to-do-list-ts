
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <>
            <header className='flex justify-center items-center align-middle h-48 py-5 bg-[#0D0D0D]'>
                <img src={rocketLogo} alt="" className='h-8 px-3' />
                <strong className='text-3xl font-bold'>
                    <span className="text-[#4EA8DE]">TO</span>
                    <span className="text-[#5E60CE]">DO</span>
                </strong>
            </header>
        </>
    )
}
