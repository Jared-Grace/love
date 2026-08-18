import { html_style_set } from "./html_style_set.mjs";
export function html_cursor_default(component) {
  "give a component back the ordinary pointer, so nothing about it says it can be pressed";
  "The twin of the hand cursor. Anything that stops answering presses has to stop asking for them too, and the cursor is the one part of asking that only shows up once the mouse is already over it - which is exactly the moment a learner is about to press.";
  html_style_set(component, "cursor", "default");
}
