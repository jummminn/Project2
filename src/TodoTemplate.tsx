import type { ReactNode } from "react";

export default function TodoTemplate({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: "400px", margin: "0 auto", textAlign: "center" }}>
      {children}
    </div>
  );
}
