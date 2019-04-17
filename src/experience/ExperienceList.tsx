import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";

interface ExpListProps {
  experiences: Experience[];
}

function ExperienceList({ experiences }: ExpListProps) {
  return (
    <div className={styles["list-main-container"]}>
      <div className={styles["list-container"]}>
        {experiences.map(experience => (
          <div key={experience.id.toString()} className={styles["list-item"]}>
            <div className={styles["experience-card"]}>
              <h5 className={styles["name"]}> {experience.name}</h5>
              <p className={styles["expertise"]} />
              <p className={styles["organisation-label"]}>Team organisation</p>
              <p className={styles["text"]}>{experience.organisation}</p>
              <p className={styles["more-about"]}>More about</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
