import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';

function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <>
            <h3 className="todo-list__title">Список справ</h3>
            <ul className="todo-list__items">
                {todos.length === 0 ? (
                    <p style={{ fontSize: 20 }}>Список пустий</p>
                ) : (
                    todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })
                )}
                {}
            </ul>
        </>
    );
}

export default TodoList;
