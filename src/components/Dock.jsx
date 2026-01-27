import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  const handleDockClick = (name) => {
    setWindowsState((state) => {
      const win = state[name];

      // Restore minimized window
      if (win.open && win.minimized) {
        return {
          ...state,
          [name]: { open: true, minimized: false },
        };
      }

      // Open closed window
      if (!win.open) {
        return {
          ...state,
          [name]: { open: true, minimized: false },
        };
      }

      // Already open → do nothing (focus later)
      return state;
    });
  };

  return (
    <footer className="dock">
      {/* GitHub */}
      <div
        onClick={() => handleDockClick("github")}
        className={`icon github ${
          windowsState.github.minimized ? "minimized" : ""
        }`}
      >
        <img src="./public/doc-icons/github.svg" alt="GitHub" />
      </div>

      {/* Notes */}
      <div
        onClick={() => handleDockClick("note")}
        className={`icon note ${
          windowsState.note.minimized ? "minimized" : ""
        }`}
      >
        <img src="./public/doc-icons/note.svg" alt="Notes" />
      </div>

      {/* Resume */}
      <div
        onClick={() => handleDockClick("resume")}
        className={`icon pdf ${
          windowsState.resume.minimized ? "minimized" : ""
        }`}
      >
        <img src="./public/doc-icons/pdf.svg" alt="Resume" />
      </div>

      {/* External: Calendar */}
      <div
        onClick={() => window.open("https://calendar.google.com", "_blank")}
        className="icon calendar"
      >
        <img src="./public/doc-icons/calender.svg" alt="Calendar" />
      </div>

      {/* Spotify */}
      <div
        onClick={() => handleDockClick("sportify")}
        className={`icon spotify ${
          windowsState.sportify.minimized ? "minimized" : ""
        }`}
      >
        <img src="./public/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      {/* External: Mail */}
      <div
        onClick={() =>
          window.open("mailto:nileshshakhya01@gmail.com", "_blank")
        }
        className="icon mail"
      >
        <img src="./public/doc-icons/mail.svg" alt="Mail" />
      </div>

      {/* External: LinkedIn */}
      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/gireejeshnilesh01professional/",
            "_blank"
          )
        }
        className="icon link"
      >
        <img src="./public/doc-icons/link.svg" alt="LinkedIn" />
      </div>

      {/* CLI */}
      <div
        onClick={() => handleDockClick("cli")}
        className={`icon cli ${
          windowsState.cli.minimized ? "minimized" : ""
        }`}
      >
        <img src="./public/doc-icons/cli.svg" alt="CLI" />
      </div>
    </footer>
  );
};

export default Dock;
