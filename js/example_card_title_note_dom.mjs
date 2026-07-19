import { html_element } from "./html_element.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_note_dom } from "./example_note_dom.mjs";
// The heading + note that open every card. The note may embed inline-code
// segments (alias / fn name), so it renders through example_note_dom.
export function example_card_title_note_dom(card, title, note, alias) {
  let heading = html_element(card, "h2");
  html_text_content_set(heading, title);
  html_style_set(heading, "font-size", "1.15rem");
  html_style_set(heading, "margin", "0 0 0.35rem");
  example_note_dom(card, note, alias);
}
