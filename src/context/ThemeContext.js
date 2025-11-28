import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Load saved theme
        return localStorage.getItem("theme") || "Light";
    });

    // Update HTML class + localStorage
    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "Dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook
export function useTheme() {
    return useContext(ThemeContext);
}
