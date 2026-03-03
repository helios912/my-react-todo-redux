import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
    },
    toggleTodo: (state, action) => {
        const todoId = action.payload;
        const todo = state.find((t) => t.id === todoId);
        if (todo) {
            todo.comlited = !todo.comleted;
        }
    },
});
