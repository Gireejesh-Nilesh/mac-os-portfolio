import "./resume.scss";
import MacWindow from "./MacWindow";

const Resume = ({ windowName, windowState, isNewlyOpened, setActiveWindow, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} isNewlyOpened={isNewlyOpened} setActiveWindow={setActiveWindow} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <embed
          title="Resume"
          src="/deloitte-nilesh.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
