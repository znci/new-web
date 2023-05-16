function setTheme(deg) {
  document.documentElement.style.setProperty("--hue", `${deg}deg`);
  localStorage.setItem("user-theme", `${deg}deg`);
  console.log("Loaded user themes");
}

document.onload = () => {
  if (!localStorage.getItem("user-theme")) {
    localStorage.setItem("user-theme", "200deg");
  }

  document.documentElement.style.setProperty(
    "--hue",
    `${localStorage.getItem("user-theme")}`
  );
  console.log("Loaded user theme updating");
};
