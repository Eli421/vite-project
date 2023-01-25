import html from './app.html?raw';
import todoStore from '../store/to-do.store';
import {renderTodos} from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list'
}


/**
 * @param {string} elementId
 */

export const App = (elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

} 