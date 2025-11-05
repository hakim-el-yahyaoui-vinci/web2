import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>
    </div>
  );
}
