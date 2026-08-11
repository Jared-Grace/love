import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_sky_pill_style(button, active) {
  "style one #day_parts choice pill for its state — the ACTIVE (currently-selected) sky inverts to a solid white pill with bold dark text so you-are-here reads at a glance, while the rest stay dark translucent. one place for both states so the selected and unselected looks can't drift apart";
  "the writing and the room around it are each the size they have always been or a share of the screen's width, whichever is smaller. six of these sit side by side on the hours panel, and six at their old size came to more than a narrow phone is wide: the first pill of every row began ten past the left edge, where nothing can scroll back to it, so a quarter of the hours simply could not be tapped. each share reaches its old value while the screen is still narrower than any phone, so nothing wider than a phone is drawn differently";
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
    padding: "0.3rem min(0.6rem, 2.4vw)",
    "border-radius": "0.4rem",
    "font-size": "min(1rem, 4vw)",
    "font-weight": weight,
    cursor: "pointer",
  });
}
