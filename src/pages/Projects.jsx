import { WebProjectCards, DesignProjectCards } from "../components/ProjectCard";
import Body from "../template/Body";

function ProjectsWeb() {
  return (
    <Body>
      <WebProjectCards/>
    </Body>
  );
}

function ProjectsDesign() {
  return (
    <Body>
      <DesignProjectCards/>
    </Body>
  );
}

export { ProjectsWeb, ProjectsDesign };
