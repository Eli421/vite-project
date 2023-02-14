import './style.css';
import { App } from './src/todos/app';
import todoStore from './src/store/to-do.store';

todoStore.initStore();

App('#app');
