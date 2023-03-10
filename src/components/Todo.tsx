import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleteTodo: (id: string, completed: boolean) => void
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onToggleCompleteTodo, onRemoveTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo(id, event.target.checked)
  }

  return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => {
                  onRemoveTodo(id)
                }}
            />
        </div>
  )
}
