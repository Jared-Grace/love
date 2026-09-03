import { html_style_set } from "./html_style_set.mjs";
export function html_style_max_height_scroll(component, value) {
  "Caps how tall one thing on the page may grow, and lets it scroll inside itself once it wants to be taller.";
  "The two belong together and are never wanted apart. A cap on its own cuts the rest of the list off with no way to reach it; scrolling on its own never happens, because a box with no cap is always exactly as tall as what is in it.";
  "What this buys is everything UNDER the capped thing: a list of hundreds left to grow pushes whatever follows it off the bottom of the page, so the reader never learns it is there.";
  html_style_set(component, "max-height", value);
  html_style_set(component, "overflow-y", "auto");
}
