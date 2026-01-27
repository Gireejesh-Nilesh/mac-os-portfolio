import React from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import "./window.scss";

const NAV_HEIGHT = 48;
const DOCK_HEIGHT = 90;

const MacWindow = ({
  children,
  windowName,
  windowState = { minimized: false },
  isNewlyOpened = false,
  setActiveWindow,
  setWindowsState,
  width = "50vw",
  height = "55vh",
}) => {
  const isMinimized = windowState.minimized;

  const [isMaximized, setIsMaximized] = React.useState(false);

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const workspaceHeight = vh - NAV_HEIGHT - DOCK_HEIGHT;

  const windowWidth =
    typeof width === "string" ? (parseFloat(width) / 100) * vw : width;

  const windowHeight =
    typeof height === "string" ? (parseFloat(height) / 100) * vh : height;

  const centerX = (vw - windowWidth) / 2;
  const centerY = NAV_HEIGHT + (workspaceHeight - windowHeight) / 2;

  return (
    <Rnd
      bounds="window"
      default={{
        x: centerX,
        y: centerY,
        width: windowWidth,
        height: windowHeight,
      }}
      size={isMaximized ? { width: vw, height: workspaceHeight } : undefined}
      position={isMaximized ? { x: 0, y: NAV_HEIGHT } : undefined}
      enableResizing={!isMaximized}
      dragHandleClassName="nav"
      style={{
        zIndex: isMinimized ? 0 : isNewlyOpened ? 10 : 1,
      }}
    >
      <motion.div
        className="window"
        style={{
          pointerEvents: isMinimized ? "none" : "auto",
        }}
        initial={
          isNewlyOpened
            ? { scale: 0.7, y: vh - DOCK_HEIGHT, opacity: 0 }
            : false
        }
        animate={{
          scale: isMinimized ? 0.6 : 1,
          y: isMinimized ? vh - DOCK_HEIGHT : 0,
          opacity: isMinimized ? 0 : 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="nav">
          <div className="dots">
            {/* CLOSE */}
            <div
              className="dot red"
              onClick={() =>
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: { open: false, minimized: false },
                }))
              }
            >
              <i className="ri-close-line" />
              <span className="tooltip">Close</span>
            </div>

            {/* MINIMIZE */}
            <div
              className="dot yellow"
              onClick={() =>
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: {
                    ...state[windowName],
                    minimized: true,
                  },
                }))
              }
            >
              <i className="ri-subtract-fill" />
              <span className="tooltip">Minimize</span>
            </div>

            {/* MAXIMIZE / RESTORE */}
            <div
              className="dot green"
              onClick={() => setIsMaximized((p) => !p)}
            >
              <i
                className={
                  isMaximized ? "ri-fullscreen-exit-fill" : "ri-fullscreen-fill"
                }
              />
              <span className="tooltip">
                {isMaximized ? "Restore" : "Maximize"}
              </span>
            </div>
          </div>

          <div className="title">
            <p>gireejeshnilesh - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </motion.div>
    </Rnd>
  );
};

export default MacWindow;
