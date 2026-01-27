import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({ windowName, windowState, isNewlyOpened, setActiveWindow, setWindowsState }) => {
  const commands = {
    about: {
      description: "Learn more about me",
      usage: "about",
      fn: () =>
        "Hi 👋 I'm Nilesh, a frontend-focused developer who loves building clean UI and interactive experiences.",
    },

    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () => "JavaScript, React, HTML, CSS, Tailwind, Git, REST APIs",
    },

    projects: {
      description: "View my featured projects",
      usage: "projects",
      fn: () =>
        "• Task Manager App\n• E-commerce Website\n• Portfolio Website\n• Blog Platform\n• Weather App",
    },

    contact: {
      description: "Get my contact details",
      usage: "contact",
      fn: () =>
        "Email: nilesh@example.com\nGitHub: https://github.com/username\nLinkedIn: https://linkedin.com/in/username",
    },

    resume: {
      description: "Get resume link",
      usage: "resume",
      fn: () => "Resume: https://drive.google.com/your-resume-link",
    },

    echo: {
      description: "Echoes input text",
      usage: "echo [text]",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow windowName={windowName} windowState={windowState} isNewlyOpened={isNewlyOpened} setActiveWindow={setActiveWindow} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`👋 Welcome to my Portfolio CLI

Available commands:
• about      – Who am I?
• skills     – What I know
• projects   – What I've built
• contact    – How to reach me
• resume     – View my resume
• clear      – Clear the terminal

Type a command and press Enter 🚀`}
          promptLabel="gireejeshnilesh:~$"
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
