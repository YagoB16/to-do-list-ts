import { List } from './List'

export function Tasks({ tasks }: { tasks: string[] }) {
  return (
    <>
      {tasks.map((task) => {
        return <List />
      })}
    </>
  )
}
