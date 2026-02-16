import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({
  windowName,
  windowState,
  isNewlyOpened,
  setActiveWindow,
  setWindowsState,
}) => {
  const commands = {
    about: {
      description: "Learn more about me",
      usage: "about",
      fn: () =>
        "I am a software developer with a strong interest in problem solving and building efficient applications 💻✨. I enjoy improving my coding skills, working with programming concepts, and exploring new technologies 🚀. I have a logical and analytical mindset that helps me tackle challenges in a structured way 🧠. I am always focused on learning, growth, and creating practical solutions 📈😊..",
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
        "• Productivity DashBoard\n• Web Based macOs Portfolio\n• SecretSite\n• Call Stack Manager",
    },

    contact: {
      description: "Get my contact details",
      usage: "contact",
      fn: () =>
        "Email: nileshshakhya01@gmail.com\nGitHub: https://github.com/Gireejesh-Nilesh\nLinkedIn: https://linkedin.com/in/gireejeshnilesh01professional",
    },

    resume: {
      description: "Get resume link",
      usage: "resume",
      fn: () =>
        "Resume: https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    },

    echo: {
      description: "Echoes input text",
      usage: "echo [text]",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      isNewlyOpened={isNewlyOpened}
      setActiveWindow={setActiveWindow}
      setWindowsState={setWindowsState}
    >
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
