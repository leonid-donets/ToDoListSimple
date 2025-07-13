import React from 'react';
import type { Todo } from '../types/Todo';
import "../style/TodoList.css";

interface Props {
  todo: Todo;
  onToggle: (id: string, isDone: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <li style={{ margin: '10px 0' }}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id, !todo.isDone)}
      />
      <span
        onDoubleClick={() => onEdit(todo.id)}
        style={{
          textDecoration: todo.isDone ? 'line-through' : 'none',
          margin: '0 10px',
          cursor: 'pointer'
        }}
      >
        {todo.title}
      </span>
      <button className="button" onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
