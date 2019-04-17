import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";
import ExperienceCard from "./ExperienceCard";

interface ExpListState {
  experiences: Experience[];
}

class ExperienceList extends React.Component<{}, ExpListState> {
  constructor(props: {}) {
    super(props);
    this.state = { experiences: [] };
  }

  render() {
    return (
      <div className={styles["list-main-container"]}>
        <div className={styles["filter-container"]}>
          <input
            className={styles["filter-input"]}
            onChange={async ({ target: { value: filter } }) => {
              const filteredExperiences = await fetchExperiences(filter);
              this.setState({ experiences: filteredExperiences });
            }}
          />
        </div>
        <div className={styles["list-container"]}>
          {this.state.experiences.map(experience => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const experiences = await fetchExperiences();
    this.setState({ experiences });
  }
}

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    // `http://localhost:3001/list/experience/${filter || ''}`,
    `https://z251j2o0xm.sse.codesandbox.io/list/experience/${filter || ""}`
  );
  const { response } = await result.json();
  return response;
}

export default ExperienceList;
