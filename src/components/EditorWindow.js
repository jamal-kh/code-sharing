import { Editor } from "@monaco-editor/react";
import { useTheme } from "../context/ThemeContext";


export default function EditorWindow({name,language,value, onChange}) {
    const { theme } = useTheme();

    return (
        <div>
            <Editor
                height="100vh"
                width="70vw"
                path={name}
                defaultLanguage={language}
                value={value}
                options={{
                    minimap: { enabled: true },

                }}
                theme={theme === "Dark" ? "vs-dark" : "light"}
                onChange={(v) => onChange(v)}

            />
        </div>
    );
}


