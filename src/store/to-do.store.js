import { Todo } from "../todos/models/to-do.model"


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending', 
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore');
};


const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.Pending:
            return state.todos.filter( todo => todo.done === false);

        default:
            throw new Error(`Option ${filter} is not valid.`)
    }
}


/**
 * 
 * @param {String} description 
 */

const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description) );
}

/**
 * 
 * @param {String} description 
 */

const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done =!todo.done;
        }

        return todo;
    });
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = (todoId) => {
    state.todos = state.todos.filter( todo => todo.done );
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter
}



export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}