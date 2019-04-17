import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";
import ExperienceCard from "./ExperienceCard";

interface ExpListProps {
  experiences: Experience[];
}

function ExperienceList({ experiences }: ExpListProps) {
  return (
    <div className={styles["list-main-container"]}>
      <div className={styles["list-container"]}>
        {experiences.map(experience => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
