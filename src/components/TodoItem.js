export function TodoItem({ todo, index, onDelete, onMoveUp, onMoveDown }) {
    return(
        <>
        <li className="todo-item">
            <span className="todo-item__text">{todo}</span>
            <button className="todo-item__button" onClick={() => onDelete(index)}>Xóa</button>
            <button className="todo-item__button" onClick={() => onMoveUp(index)}>⬆️</button>
            <button className="todo-item__button" onClick={() => onMoveDown(index)}>⬇️</button>
        </li>
        </>
    )
}