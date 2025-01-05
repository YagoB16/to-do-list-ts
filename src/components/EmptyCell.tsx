import Clipboard from '../assets/Clipboard.svg'

export function EmptyCell() {
  const today = new Date()

  return (
    <>
      <div className="pt-14">
        <img src={Clipboard} alt="" />
      </div>
      <div className="text-center text-[#808080]">
        <p className="text-inter-bold">Você ainda não adicionou uma tarefa</p>
        <p className="text-inter">
          Crie uma tarefa para hoje {today.toLocaleDateString()}
        </p>
      </div>
    </>
  )
}
