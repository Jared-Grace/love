import { property_get } from "./property_get.mjs";
export function g_time_color(time) {
  "the semi-transparent sky-tint color for a time of day (the single source for the four tints): pale-cool morning → near-clear noon → golden afternoon → deep-blue night";
  let colors = {
    morning: "rgba(120, 170, 235, 0.14)",
    noon: "rgba(255, 250, 220, 0.04)",
    afternoon: "rgba(255, 165, 70, 0.20)",
    night: "rgba(15, 25, 65, 0.52)",
  };
  let color = property_get(colors, time);
  return color;
}
