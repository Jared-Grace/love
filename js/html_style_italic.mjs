import { html_style_set } from "./html_style_set.mjs";
export function html_style_italic(component) {
  "Leans the words of one piece of a page over, the way print has leant a word that is not the author's own for about five hundred years.";
  "It is a second telling and never the only one. A reader with a screen reader hears nothing of a slope, and a reader who has copied the words away carries none of it with them, so whatever the lean is saying has to be said in the words as well.";
  html_style_set(component, "fontStyle", "italic");
}
