import { useEffect, useState } from "react";

// can also pull out the count - 1 logic if it's more complicated 
// easier to test
const Counter = () => {
  const [count, setCount] = useState(0);
  const [draftInputValue, setDraftInputValue] = useState(0);

  // really an excuse to use draft account
  // has to return undefined or a deconstructor function
  useEffect(() => setDraftInputValue(count), [count])

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        {/* race condition around previous state value with count => count -1 */}
        <button onClick={() => setCount(count => count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
        <button onClick={() => setCount(count => count + 1)}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setCount(draftInputValue);
        }}>
          {/* event.target.valueAsNumber to coerce */}
          <input type="number" value={draftInputValue} onChange={e => setDraftInputValue(e.target.valueAsNumber)} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
