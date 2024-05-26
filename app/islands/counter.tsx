import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-5">
      <p>{count}</p>
      <button
        className="border border-slate-500 rounded mt-2 py-1 px-2 hover:bg-slate-500 hover:text-slate-50"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
