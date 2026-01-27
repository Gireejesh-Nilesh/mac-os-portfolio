import "./spotify.scss";
import MacWindow from "./MacWindow";

const Sportify = ({ windowName, windowState, isNewlyOpened, setActiveWindow, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      isNewlyOpened={isNewlyOpened}
      setActiveWindow={setActiveWindow}
      setWindowsState={setWindowsState}
      width="25vw"
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ border: "12px" }}
          src="https://open.spotify.com/embed/artist/4YRxDV8wJFPHPTeXepOstw?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Sportify;
