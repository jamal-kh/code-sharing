import { useState } from "react";

export default function Tab({
  w,
  active,
  setActiveWindowIndex,
  setWindows,
}) {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(w.name);

  const getExtension = (name) => {
    const parts = name.split(".");
    return parts.length > 1 ? parts.pop() : null;
  };

  const finishEditing = () => {
    const trimmed = tempName.trim();

    setWindows((prev) =>
      prev.map((win) =>
        win.index === w.index
          ? {
              ...win,
              name: trimmed || win.name,
              language: getExtension(trimmed || win.name),
            }
          : win
      )
    );

    setEditing(false);
  };

  const cancelEditing = () => setEditing(false);

  const handleClose = (e) => {
    e.stopPropagation();

    setWindows((prev) => {
      const remaining = prev.filter((item) => item.index !== w.index);

      setActiveWindowIndex(
        remaining.length ? remaining[remaining.length - 1].index : null
      );

      return remaining;
    });
  };

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded cursor-pointer group
        ${active ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}
      `}
      onClick={() => setActiveWindowIndex(w.index)}
    >
      {/* NAME */}
      {editing ? (
        <input
          autoFocus
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={(e) => {
            if (e.key === "Enter") finishEditing();
            if (e.key === "Escape") cancelEditing();
          }}
          className="bg-transparent border border-gray-400 rounded px-1 text-black focus:outline-none"
          style={{ width: "100px" }}
        />
      ) : (
        <span
          className="truncate max-w-[120px]"
          onDoubleClick={(e) => {
            e.stopPropagation();
            setEditing(true);
          }}
        >
          {w.name}
        </span>
      )}

      {/* CLOSE */}
      <button
        onClick={handleClose}
        className="opacity-0 group-hover:opacity-100 hover:bg-black/20 px-1 rounded transition"
      >
        ✕
      </button>
    </div>
  );
}