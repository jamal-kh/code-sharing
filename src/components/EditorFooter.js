import { useState } from "react";
import DropDown from "../components/dropdown";
import linkIcon from "../assets/link.svg";
import shareIcon from "../assets/Share.svg";
import { useTheme } from "../context/ThemeContext";
export default function EditorFooter() {
    const [language, setLanguage] = useState("JavaScript");
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-between mt-5">
                <div className="flex gap-5">
                    {/* Second Dropdown (Mode / Theme / Whatever) */}
                    <DropDown
                        options={["Light", "Dark"]}
                        value={theme}
                        onChange={toggleTheme}
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center w-[120px] gap-1">
                    {
                        true && <>
                            <img src={linkIcon} alt="link" className="cursor-pointer"/>
                            <p className="truncate dark:text-white">jaicjoaijeoifwofjojewpofkwfhwiefwf</p>
                        </>
                    }
                </div>
                <button className="flex gap-2 text-white bg-[#406AFF] py-2 px-4 rounded-full">
                    <img src={shareIcon} alt="shareBtnIcon" />
                    <span>Share</span>
                </button>
            </div>
        </div>
    )
}