import { FcCalendar } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';
import { FcFullTrash } from 'react-icons/fc';
import { FcExport } from 'react-icons/fc';
function TodoItem({ todo, index, toDelete, onToggle }) {
    return (
        <li className="todo-list__item">
            <div className="todo-item__container">
                <div>
                    <FcCalendar style={{ fontSize: 35, paddingRight: 20 }} />
                    {todo.text}
                </div>
                <div>
                    {!todo.completed ? (
                        <FcCheckmark
                            style={{ fontSize: 35, paddingRight: 20 }}
                            onClick={() => onToggle(todo.id)}
                        />
                    ) : (
                        <FcExport
                            style={{ fontSize: 35, paddingRight: 20 }}
                            onClick={() => onToggle(todo.id)}
                        />
                    )}

                    <FcFullTrash
                        onClick={() => toDelete(todo)}
                        style={{ fontSize: 35, paddingRight: 10 }}
                    />
                </div>
            </div>
        </li>
    );
}

export default TodoItem;
