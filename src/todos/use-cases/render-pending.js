import toDoStore, { Filters } from "../../store/to-do.store";

let element;

export const renderPending = (elementId) => {
    if (!element) 
        element = document.querySelector(elementId);

    if (!element)
        throw new error(`Element ${elementId} not found`);

    element.innerHTML = toDoStore.getTodos(Filters.Pending).length;
}