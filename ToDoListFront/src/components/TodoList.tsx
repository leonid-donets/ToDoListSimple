import React, { useEffect, useState } from 'react';
import type { Todo } from '../types/Todo';
import TodoItem from './TodoItem';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';
import "../style/TodoList.css";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    const response = await addTodo({ title: newTitle, isDone: false });
    setTodos([...todos, response.data]);
    setNewTitle('');
  };

  const handleToggle = async (id: string, isDone: boolean) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    const updatedTodo = { ...todo, isDone };
    await updateTodo(id, updatedTodo);
    setTodos(todos.map(t => (t.id === id ? updatedTodo : t)));
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleEdit = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    setNewTitle(todo.title);
    setEditId(id);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!editId || !newTitle.trim()) return;
    const updated = { ...todos.find(t => t.id === editId)!, title: newTitle };
    await updateTodo(editId, updated);
    setTodos(todos.map(t => (t.id === editId ? updated : t)));
    setEditId(null);
    setNewTitle('');
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setNewTitle('');
    setEditId(null);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">רשימת משימות</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="הכנס משימה חדשה"
          />
          {isEditing ? (
            <>
              <button onClick={handleUpdate} className="button">💾 עדכן</button>
              <button onClick={cancelEdit} className="button cancel">❌ ביטול</button>
            </>
          ) : (
            <button onClick={handleAdd} className="button">➕ הוסף</button>
          )}
        </div>
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
