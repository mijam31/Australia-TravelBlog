import { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import styles from "./DaySelector.module.css";

const DaySelector = ({ days, selectedDay }) => {
  const [visibleDays, setVisibleDays] = useState(-1); // Initialiserer state til at holde styr på de synlige dage
  const [activeDay, setActiveDay] = useState(days[0].id); // Initialiserer state til at holde styr på den aktive dag

  useEffect(() => {
    // Effekt, der kører, når visibleDays ændres
    const middleIndex = Math.min(visibleDays + 1, days.length - 1); // Beregner midterste indeks af de synlige dage
    setActiveDay(days[middleIndex].id); // Sætter den aktive dag til midterste dag
    selectedDay(days[middleIndex]); // Kalder selectedDay funktionen med midterste dag
  }, [visibleDays, days, selectedDay]); // Afhængigheder for useEffect

  const handleNext = () => {
    // Funktion til at håndtere klik på næste pil
    if (visibleDays + 3 <= days.length) {
      // Tjekker om der er flere dage at vise
      setVisibleDays(visibleDays + 1); // Øger visibleDays med 1
    }
  };

  const handlePrev = () => {
    // Funktion til at håndtere klik på forrige pil
    if (visibleDays + 1 > 0) {
      // Tjekker om der er tidligere dage at vise
      setVisibleDays(visibleDays - 1); // Mindsker visibleDays med 1
    }
  };

  const handleActive = (day) => {
    // Funktion til at håndtere klik på en dag
    setActiveDay(day.id); // Sætter den aktive dag til den valgte dag
    selectedDay(day); // Kalder selectedDay funktionen med den valgte dag
  };

  return (
    <div className={styles.daySelector}>
      {/* Wrapper div med CSS-klasse */}
      <FaAngleUp onClick={handlePrev} disabled={visibleDays === 0} />
      {/* Op-pil ikon med klik-håndtering og deaktivering, hvis visibleDays er 0 */}
      <ul>
        {/* Liste over synlige dage */}
        {days

          .slice(
            Math.min(Math.max(visibleDays, 0), days.length - 3),
            Math.max(visibleDays + 3, 3)
          )
          .map((day, index) => {
            console.log(
              Math.min(Math.max(visibleDays, 0), days.length - 3),
              Math.max(visibleDays + 3, 3)
            );
            console.log(days);

            // Mapper over de synlige dage
            let className =
              index === 1 ? styles.middleActive : styles.sideActive;
            // Sætter CSS-klasse baseret på om dagen er midterste eller ej
            if (day.id === activeDay) {
              // Tjekker om dagen er den aktive dag
              className += ` ${styles.active}`; // Tilføjer aktiv CSS-klasse
            }
            return (
              <li
                key={day.id}
                onClick={() => handleActive(day)}
                className={className}
              >
                {/* Listeelement for hver dag med klik-håndtering og CSS-klasse */}
                {day.day}
                {/* Viser dagsnavn */}
              </li>
            );
          })}
      </ul>
      <FaAngleDown
        onClick={handleNext}
        disabled={visibleDays + 3 >= days.length}
      />
      {/* Ned-pil ikon med klik-håndtering og deaktivering, hvis der ikke er flere dage at vise */}
    </div>
  );
};
export default DaySelector;
