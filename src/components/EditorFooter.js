import DropDown from "../components/dropdown";
import linkIcon from "../assets/link.svg";
import shareIcon from "../assets/Share.svg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function EditorFooter({ windowLink, onClick }) {
    const { theme, toggleTheme } = useTheme();
    const [isCopied, setIsCopied] = useState(false);


    const copyLink = async () => {
        if (!windowLink) return;

        try {
         const link = `${window.location.origin}/share/${windowLink}`;   
         await navigator.clipboard.writeText(link);
            setIsCopied(true);
            
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-between mt-5">
                <div className="flex gap-5">
                    <DropDown
                        options={["Light", "Dark"]}
                        value={theme}
                        onChange={toggleTheme}
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center w-[120px] gap-1">
                    {windowLink && (
                        <>
                            <img 
                                src={linkIcon} 
                                alt="link" 
                                className="cursor-pointer" 
                                onClick={copyLink} 
                            />
                            {/* Feedback to the user */}
                            <p className="truncate dark:text-white cursor-pointer" onClick={copyLink}>
                                {isCopied ? "Copied!" : windowLink}
                            </p>
                        </>
                    )}
                </div>
                <button className="flex gap-2 text-white bg-[#406AFF] py-2 px-4 rounded-full" onClick={onClick}>
                    <img src={shareIcon} alt="shareBtnIcon" />
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
}