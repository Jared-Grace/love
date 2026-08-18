import { html_style_set } from "./html_style_set.mjs";
export function html_style_width_fit_content(component) {
  "draws a component only as wide as what is inside it, and no wider than the room it was given";
  "A block component fills the whole width it is given, so a coloured background behind a short piece of text runs on across empty room. This is what keeps a chip the width of its own text.";
  "Content wider than the room still wraps rather than pushing the page sideways, which is what separates this from asking for the widest the content could be drawn.";
  html_style_set(component, "width", "fit-content");
}
