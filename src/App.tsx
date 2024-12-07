import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
export function App() {
    return (
        <>
            <Header />
            <div className=' -mt-6 flex justify-center items-center gap-2'>
                <Input />
                <Button />
            </div>
        </>
    )
}
