import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

export function App() {
    return (
        <>
            <Header />
            <div className='max-w-6xl w-50p -mt-8 grid grid-cols-[2fr_100px] gap-3 items-start mx-auto'>
                <Input />
                <Button />
            </div>
            <main className='flex justify-center items-center'>
                <Tasks />
            </main>
        </>
    )
}
