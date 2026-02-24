function TodoItem({ todo, index, toDelete }) {
    return (
        <li onClick={() => toDelete(todo)} className="todo-list__item">
            {index + 1 + '.' + ' ' + todo.text}
        </li>
    );
}

export default TodoItem;
