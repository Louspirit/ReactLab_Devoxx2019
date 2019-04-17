import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";

interface ExpCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExpCardProps) => {
  return (
    <div key={experience.id.toString()} className={styles["list-item"]}>
      <div className={styles["experience-card"]}>
        <h5 className={styles["name"]}> {experience.name}</h5>
        <p className={styles["expertise"]}>{experience.expertise}</p>
        <p className={styles["organisation-label"]}>Team organisation</p>
        <p className={styles["text"]}>{experience.organisation}</p>
        <p className={styles["more-about"]}>More about</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
