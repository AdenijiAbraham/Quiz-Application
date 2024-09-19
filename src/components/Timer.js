import { useEffect, useState } from "react";

export default function Timer({ setStopTime, questionNumber, paused,  setTimeout }) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
      if (paused) return;

      if (timer === 0) {
        setStopTime(true); // Stop the quiz
        setTimeout(true); // Trigger timeout state
        return;
      }


        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [setStopTime, timer, paused, setTimeout]);

    useEffect(() => {
        setTimer(30);
    }, [questionNumber]);

    return (
      <div className="timerDisplay">
        {timer}
      </div>
    );
}

