import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "./MacWindow";
import "./note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = ({ windowName, windowState, isNewlyOpened, setActiveWindow, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow windowName={windowName} windowState={windowState} isNewlyOpened={isNewlyOpened} setActiveWindow={setActiveWindow} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="markdown" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
