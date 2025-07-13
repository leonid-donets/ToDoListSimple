import axios from 'axios';
import type { Todo } from '../types/Todo';
import URL from '../config'; // או './config' תלוי במיקום

const API_URL = URL;

export const getTodos = () => axios.get<Todo[]>(API_URL);
export const addTodo = (todo: Omit<Todo, 'id'>) => axios.post<Todo>(API_URL, todo);
export const updateTodo = (id: string, todo: Todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id: string) => axios.delete(`${API_URL}/${id}`);
