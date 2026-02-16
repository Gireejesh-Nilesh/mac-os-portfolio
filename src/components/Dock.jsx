import "./dock.scss";
const base = import.meta.env.BASE_URL + "/";
const noteIcon = `${base}doc-icons/note.svg`;
const pdfIcon = `${base}doc-icons/pdf.svg`;
const githubIcon = `${base}doc-icons/github.svg`;
const calendarIcon = `${base}doc-icons/calender.svg`;
const spotifyIcon = `${base}doc-icons/spotify.svg`;
const mailIcon = `${base}doc-icons/mail.svg`;
const linkIcon = `${base}doc-icons/link.svg`;
const cliIcon = `${base}doc-icons/cli.svg`;

const Dock = ({ windowsState, setWindowsState }) => {
  const handleDockClick = (name) => {
    setWindowsState((state) => {
      const win = state[name];

      if (win.open && win.minimized) {
        return {
          ...state,
          [name]: { open: true, minimized: false },
        };
      }

      if (!win.open) {
        return {
          ...state,
          [name]: { open: true, minimized: false },
        };
      }

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
        <img src={githubIcon} alt="GitHub" />
      </div>

      {/* Notes */}
      <div
        onClick={() => handleDockClick("note")}
        className={`icon note ${
          windowsState.note.minimized ? "minimized" : ""
        }`}
      >
        <img src={noteIcon} alt="Notes" />
      </div>

      {/* Resume */}
      <div
        onClick={() => handleDockClick("resume")}
        className={`icon pdf ${
          windowsState.resume.minimized ? "minimized" : ""
        }`}
      >
        <img src={pdfIcon} alt="Resume" />
      </div>

      {/* External: Calendar */}
      <div
        onClick={() => window.open("https://calendar.google.com", "_blank")}
        className="icon calendar"
      >
        <img src={calendarIcon} alt="Calendar" />
      </div>

      {/* Spotify */}
      <div
        onClick={() => handleDockClick("spotify")}
        className={`icon spotify ${
          windowsState.spotify?.minimized ? "minimized" : ""
        }`}
      >
        <img src={spotifyIcon} alt="Spotify" />
      </div>

      {/* External: Mail */}
      <div
        onClick={() =>
          window.open("mailto:nileshshakhya01@gmail.com", "_blank")
        }
        className="icon mail"
      >
        <img src={mailIcon} alt="Mail" />
      </div>

      {/* External: LinkedIn */}
      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/gireejeshnilesh01professional/",
            "_blank",
          )
        }
        className="icon link"
      >
        <img src={linkIcon} alt="LinkedIn" />
      </div>

      {/* CLI */}
      <div
        onClick={() => handleDockClick("cli")}
        className={`icon cli ${windowsState.cli.minimized ? "minimized" : ""}`}
      >
        <img src={cliIcon} alt="CLI" />
      </div>
    </footer>
  );
};

export default Dock;
