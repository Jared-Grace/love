import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_sky_pill_style(button, active) {
  "style one #day_parts choice pill for its state — the ACTIVE (currently-selected) sky inverts to a solid white pill with bold dark text so you-are-here reads at a glance, while the rest stay dark translucent. one place for both states so the selected and unselected looks can't drift apart";
  let background = "rgba(0, 0, 0, 0.7)";
  let color = "white";
  let weight = "normal";
  if (active) {
    background = "white";
    color = "black";
    weight = "bold";
  }
  html_style_assign(button, {
    background,
    color,
    border: "none",
    padding: "0.3rem 0.6rem",
    "border-radius": "0.4rem",
    "font-size": "1rem",
    "font-weight": weight,
    cursor: "pointer",
  });
}
