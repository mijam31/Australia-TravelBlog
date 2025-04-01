import DayCard from "../dayCard/DayCard";
import DaySelector from "../daySelector/DaySelector";
import styles from "./Content.module.css";
import { useState } from "react";
import data from "../../components/travelDays/travelDays.json";

const Content = () => {
  const [selectedDay, setSelectedDay] = useState(data[0]);

  const handleSelectedDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.dayCard}>
          {selectedDay && <DayCard key={selectedDay.id} day={selectedDay} />}
        </div>
        <DaySelector
          className={styles.selector}
          days={data}
          selectedDay={handleSelectedDay}
        />
      </section>
    </>
  );
};

export default Content;
