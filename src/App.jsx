import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoList from '@components/TodoList';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { addTodo } from './store/todosSlice';

function App() {
    const [data, setData] = useState([]);
    const [todoska, setTodoska] = useState('');
    const [filter, setFilter] = useState('all');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!todoska.trim()) return;
        dispatch(addTodo({ id: uuidv4(), text: todoska, completed: false }));
        setTodoska('');
    };

    // const filteredData = todos?.filter((item) => {
    //     if (filter === 'active') return !item.completed;
    //     if (filter === 'completed') return item.completed;
    //     return true;
    // });

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
                    <button>Очистити список</button>
                    <button>Очистити виконані</button>
                </div>
            </div>
            <TodoList />
            {/* {todoCount > 0 && (
                <p className="read-the-docs">
                    Зараз у Вас {todoCount}{' '}
                    {todoCount === 1
                        ? 'невиконана справа'
                        : 'невиконаних справ'}
                </p>
            )} */}
        </>
    );
}

export default App;
