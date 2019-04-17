import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";
import ExperienceCard from "./ExperienceCard";

interface ExpListProps {
  experiences: Experience[];
}

class ExperienceList extends React.Component<{}, {}> {
  constructor(private experiencesProps: ExpListProps) {
    super(experiencesProps);
  }

  render() {
    return (
      <div className={styles["list-main-container"]}>
        <div className={styles["list-container"]}>
          {this.experiencesProps.experiences.map(experience => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default ExperienceList;
