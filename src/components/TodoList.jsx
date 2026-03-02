import TodoItem from './TodoItem';

function TodoList({ data, toDelete, onToggle }) {
    return (
        <>
            <h3 className="todo-list__title">Список справ</h3>
            <ul className="todo-list__items">
                {data.length === 0 ? (
                    <p style={{ fontSize: 20 }}>Список пустий</p>
                ) : (
                    data.map((todo, index) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                index={index}
                                toDelete={toDelete}
                                onToggle={onToggle}
                            />
                        );
                    })
                )}
                {}
            </ul>
        </>
    );
}

export default TodoList;
