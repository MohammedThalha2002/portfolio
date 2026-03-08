import { useState, useCallback, useEffect } from "react";

/** Keeps a live HH:MM time and weekday date string, updating every 10s. */
export function useClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const update = useCallback(() => {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");
    setTime(`${h}:${m}`);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setDate(
      `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`,
    );
  }, []);

  useEffect(() => {
    update();
    const id = setInterval(update, 10_000);
    return () => clearInterval(id);
  }, [update]);

  return { time, date };
}
