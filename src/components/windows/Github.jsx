import MacWindow from "../windows/MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: "",
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
      </div>
    </div>
  );
};

const Github = ({
  windowName,
  windowState,
  isNewlyOpened,
  setActiveWindow,
  setWindowsState,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      isNewlyOpened={isNewlyOpened}
      setActiveWindow={setActiveWindow}
      setWindowsState={setWindowsState}
    >
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
