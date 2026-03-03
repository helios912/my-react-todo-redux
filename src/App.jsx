import { useEffect, useState } from 'react';
import TodoList from '@components/TodoList';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [todoska, setTodoska] = useState('');
    const [filter, setFilter] = useState('all');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!todoska.trim()) return;
        setData([...data, { id: uuidv4(), text: todoska, completed: false }]);
        setTodoska('');
    };
    const handleDelete = (delItem) => {
        setData(data.filter((item) => item.id !== delItem.id));
    };
    const filteredData = data.filter((item) => {
        if (filter === 'active') return !item.completed;
        if (filter === 'completed') return item.completed;
        return true;
    });
    const handleToggle = (id) => {
        setData((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };
    const unComlitedItems = data.filter((item) => !item.completed);
    const todoCount = unComlitedItems.length;

    return (
        <>
            <div>
                <h1>Мій перший todo list</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        placeholder=" Введіть справу"
                        type="text"
                        value={todoska}
                        onChange={(e) => setTodoska(e.target.value)}
                    />
                    <button type="submit">Додати справу</button>
                </form>
                <div className="filter-btn_container">
                    <button onClick={() => setFilter('all')}>Всі</button>
                    <button onClick={() => setFilter('active')}>
                        Невиконані
                    </button>
                    <button onClick={() => setFilter('completed')}>
                        Виконані
                    </button>
                </div>
                <div className="filter-btn__container">
                    <button onClick={() => setData([])}>Очистити список</button>
                    <button onClick={() => setData(unComlitedItems)}>
                        Очистити виконані
                    </button>
                </div>

                <TodoList
                    data={filteredData}
                    toDelete={handleDelete}
                    onToggle={handleToggle}
                />
            </div>
            {todoCount > 0 && (
                <p className="read-the-docs">
                    Зараз у Вас {todoCount}{' '}
                    {todoCount === 1
                        ? 'невиконана справа'
                        : 'невиконаних справ'}
                </p>
            )}
        </>
    );
}

export default App;
