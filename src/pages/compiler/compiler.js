import EditorFooter from "../../components/EditorFooter";
import EditorWindow from "../../components/EditorWindow";
import { useState } from "react";
import Tabs from "../../components/tabs";
import AddTab from "../../components/AddTab";

const lanuages = {
  js: "javascript",
  py: "python",
  txt: "text"
};
export default function Compiler() {
  const [windows, setWindows] = useState([
    {
      index: 1,
      name: "main.js",
      language: "javascript",
      value: "console.log('Hello');",
    },
  ]);

  const [activeWindowIndex, setActiveWindowIndex] = useState(1);
  const activeWindow = windows.find((w) => w.index === activeWindowIndex);

  const newTab = () => {
    const newIndex = Math.max(...windows.map((w) => w.index)) + 1;

    const newWindow = {
      index: newIndex,
      name: `Untitled-${newIndex}.txt`,
      language: "text",
      value: "",
    };

    setWindows([...windows, newWindow]);
    setActiveWindowIndex(newIndex);
  };

  const changeValue = (newValue) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.index === activeWindow.index ? { ...w, value: newValue } : w,
      ),
    );
  };

  const generateLink = ()=>{
    return crypto.randomUUID().replaceAll("-","")
  }

  return (
    <div className="max-w-[1200px] bg-white p-4 rounded-lg dark:bg-[#121826]">
      <div>
        <div className="w-full flex items-center gap-1 pb-2 scroll-auto">
          <Tabs
            windows={windows}
            activeWindowIndex={activeWindowIndex}
            setActiveWindowIndex={setActiveWindowIndex}
            setWindows={setWindows}
          />

          <AddTab onClick={newTab} />
        </div>

        <EditorWindow
          name={activeWindow.name}
          language={lanuages[activeWindow.language]}
          value={activeWindow.value}
          onChange={changeValue}
        />
      </div>

      <EditorFooter windowLink={generateLink()} onClick={()=> {console.log("Code shared")}}/>
    </div>
  );
}
