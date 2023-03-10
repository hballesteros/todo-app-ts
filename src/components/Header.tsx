import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>todo<img
                style={{ width: '60px', height: 'auto' }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/300px-Typescript_logo_2020.svg.png' alt='typescript'
            /></h1>

            <CreateTodo saveTodo={onAddTodo} />
        </header>
  )
}
