import React from "react";
import styles from "./ExperienceList.module.css";
import { Experience } from "../model";
import Details from "./ExperienceDetails";

interface ExpCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExpCardProps) => {
  return (
    <div key={experience.id.toString()} className={styles["list-item"]}>
      <div className={styles["experience-card"]}>
        <ExperienceSummary experience={experience} />
      </div>
    </div>
  );
};

const ExperienceSummary = ({
  experience: { name, expertise, description, location, organisation }
}: {
  experience: Experience;
}) => (
  <>
    {/* <> or <div> */}
    <h5 className={styles["name"]}>{name}</h5>
    <p className={styles["expertise"]}>{expertise}</p>
    <p className={styles["organisation-label"]}>Team organisation</p>
    <p className={styles["text"]}>{organisation}</p>
    <p className={styles["more-about"]}>More about</p>
    {/* </> or </div> */}
  </>
);

export default ExperienceCard;
