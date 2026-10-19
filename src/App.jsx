import { useState } from "react";
import Feedback from "./components/Feedback";
import Guide from "./components/Guide";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead((count) => count + 1);
  }

  function handleBookmark() {
    setBookmarks((count) => count + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <nav className="row-span-3 flex flex-col bg-[#5C4F4A] p-12 text-[#EDE9E6]">
        <h1 className="text-3xl font-bold">Git Quickstart</h1>
        <ul className="mt-10 text-xl">
          <li className="border-l-4 border-[#C9996B] py-2 pl-4">Create</li>
          <li className="border-l-4 border-[#C9996B] py-2 pl-4">Rename</li>
          <li className="border-l-4 border-[#C9996B] py-2 pl-4">Connect</li>
          <li className="border-l-4 border-[#C9996B] py-2 pl-4">Upload</li>
        </ul>
        <p className="mt-auto text-xl">Paul Albert L. O</p>
      </nav>

      <div className="flex items-end justify-between px-20 pt-10">
        <div>
          <header>
            <h2 className="text-5xl font-bold">Your first repository</h2>
            <p className="mt-4 text-2xl">Four commands to put your project on GitHub.</p>
          </header>
          <div className="mt-6 flex gap-4">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleRead}
            >
              Mark as read
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{read}</p>
            <p className="mt-1 text-lg">Marked as read</p>
          </div>
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{bookmarks}</p>
            <p className="mt-1 text-lg">Bookmarks</p>
          </div>
        </div>
      </div>

      <Guide />
      <Feedback />
    </div>
  );
}

export default App;