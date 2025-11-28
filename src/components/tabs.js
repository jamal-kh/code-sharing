import Tab from "./ui/Tab";

export default function Tabs({ windows, activeWindowIndex, setActiveWindowIndex, setWindows }) {
  return (
    <div className="flex gap-1">
      {windows.map(w => (
        <Tab
          key={w.index}
          w={w}
          active={activeWindowIndex === w.index}
          setActiveWindowIndex={setActiveWindowIndex}
          setWindows={setWindows}
        />
      ))}
    </div>
  );
}
