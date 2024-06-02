import { createSignal, onCleanup, onMount } from "solid-js";

function buildTimeString(timezone: string) {
  return new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone,
  });
}

export function Clock(props: { timezone: string }) {
  const [currentTime, setCurrentTime] = createSignal(
    buildTimeString(props.timezone),
  );

  const interval = setInterval(() => {
    setCurrentTime(buildTimeString(props.timezone));
  }, 1000);
  onCleanup(() => clearInterval(interval));

  return currentTime;
}
