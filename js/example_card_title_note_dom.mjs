import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
// The heading + note that open every card.
export function example_card_title_note_dom(card, title, note) {
  let heading = html_element(card, "h2");
  html_text_set(heading, title);
  html_style_set(heading, "font-size", "1.15rem");
  html_style_set(heading, "margin", "0 0 0.35rem");
  let note_element = html_element(card, "p");
  html_text_set(note_element, note);
  html_style_set(note_element, "color", "#555");
  html_style_set(note_element, "line-height", "1.5");
  html_style_set(note_element, "margin", "0 0 0.75rem");
}
