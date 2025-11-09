import type { Todo } from "./App";

export default function TodoItem({ todo, onToggle, onRemove, }: { todo: Todo; onToggle: (id: number) => void; onRemove: (id: number) => void; }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "8px 0",
      }}
    >

      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: "8px" }}
      />

      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          flex: 1,
          textAlign: "left",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onRemove(todo.id)}
        style={{
          background: "transparent",
          border: "none",
          color: "grey",
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
      >
        ✕
      </button>
    </li>
  );
}
