import { useState } from "react";

function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  function handleClear() {
    setYes(0);
    setNo(0);
  }

  return (
    <section className="px-20 py-6">
      <div className="border-t border-[#C9996B] pt-4">
        <h3 className="text-2xl font-bold">Was this guide helpful?</h3>
        <div className="mt-4 flex items-center gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-lg font-bold text-[#EDE9E6]"
            onClick={() => setYes((count) => count + 1)}
            type="button"
          >
            Yes ({yes})
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-lg font-bold text-[#5C4F4A]"
            onClick={() => setNo((count) => count + 1)}
            type="button"
          >
            No ({no})
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-6 py-2 text-lg font-bold"
            onClick={handleClear}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feedback;