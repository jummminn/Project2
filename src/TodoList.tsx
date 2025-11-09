import TodoItem from "./TodoItem";
import type { Todo } from "./App";

export default function TodoList({ todos, onToggle, onRemove, }: { todos: Todo[]; onToggle: (id: number) => void; onRemove: (id: number) => void; }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
