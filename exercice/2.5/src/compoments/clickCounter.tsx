import { useState } from "react";

type ClickCounterProps = {
  title: string;
  message: string;
  hoverMessage : string;
};

export function ClickCounter({ title, message, hoverMessage }: ClickCounterProps) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="card"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    
      <h2>{title}</h2>
      
            {isHovered && <p>{hoverMessage}</p>}

      <button onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>

       {count >= 10 && <p>{message}</p>}
    </div>
  );
}
