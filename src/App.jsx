import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Sportify from "./components/windows/Sportify";

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: { open: false, minimized: false },
    note: { open: false, minimized: false },
    resume: { open: false, minimized: false },
    sportify: { open: false, minimized: false },
    cli: { open: false, minimized: false },
  });

  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      <AnimatePresence>
        {windowsState.github.open && (
          <Github
            windowName="github"
            windowState={windowsState.github}
            isNewlyOpened={activeWindow === "github"}
            setActiveWindow={setActiveWindow}
            setWindowsState={setWindowsState}
          />
        )}

        {windowsState.note.open && (
          <Note
            windowName="note"
            windowState={windowsState.note}
            isNewlyOpened={activeWindow === "note"}
            setWindowsState={setWindowsState}
            setActiveWindow={setActiveWindow}
          />
        )}
        {windowsState.resume.open && (
          <Resume
            windowName="resume"
            windowState={windowsState.resume}
            isNewlyOpened={activeWindow === "resume"}
            setWindowsState={setWindowsState}
            setActiveWindow={setActiveWindow}
          />
        )}
        {windowsState.sportify.open && (
          <Sportify
            windowName="sportify"
            windowState={windowsState.sportify}
            isNewlyOpened={activeWindow === "sportify"}
            setWindowsState={setWindowsState}
            setActiveWindow={setActiveWindow}
          />
        )}
        {windowsState.cli.open && (
          <Cli
            windowName="cli"
            windowState={windowsState.cli}
            isNewlyOpened={activeWindow === "cli"}
            setWindowsState={setWindowsState}
            setActiveWindow={setActiveWindow}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
