import { html, component, useState, useEffect } from "https://esm.sh/haunted";

function getTimezoneTime(timezone) {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: timezone,
    timeStyle: "short",
    hour12: true,
  });
}

function TZDisplay({ timezone }) {
  const [currentTime, setCurrentTime] = useState(getTimezoneTime(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimezoneTime(timezone));
    }, 1000);

    return () => clearInterval(interval);
  });

  return html` <span>${currentTime}</span> `;
}

customElements.define(
  "tz-display",
  component(TZDisplay, {
    useShadowDOM: false,
    observedAttributes: ["timezone"],
  })
);
