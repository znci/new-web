import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Props {
  timezone: string;
}

function buildTimeString(date: Date, timezone: string) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone,
  });
}

export const Clock = component$<Props>((props) => {
  const currentTime = useSignal(buildTimeString(new Date(), props.timezone));

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentTime.value = buildTimeString(new Date(), props.timezone);
    }, 1);

    return () => clearInterval(interval);
  });

  return <>{currentTime}</>;
});
