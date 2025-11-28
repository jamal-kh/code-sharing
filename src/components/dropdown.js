import { useState } from "react";
import downAarrorIcon from "../assets/down_arrow.svg";

export default function DropDown({ options = [], value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);     
        setIsOpen(false);    
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-auto  flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full"
            >
                {value || "Select option"}
                <img src={downAarrorIcon} alt="arrow icon" />
            </button>

            {isOpen && (
                <div
                    className="
                        absolute z-10 w-auto mt-2 bg-white shadow-md rounded border 
                        max-h-40 overflow-y-auto
                    "
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
