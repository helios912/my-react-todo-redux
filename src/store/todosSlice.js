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
    delTodo: (state, action) => {
        const todoId = action.payload;
        state.filter((t) => t.id !== todoId);
    },
});
export const { addTodo, toggleTodo, delTodo } = todosSlice.actions;
export default todosSlice.reducer;
