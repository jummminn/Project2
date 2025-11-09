import { useState, type FormEvent, type ChangeEvent  } from "react";

export default function TodoInsert({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="할 일을 입력하고 Enter"
      />
      <button type="submit">추가</button>
    </form>
  );
}
