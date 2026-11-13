import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
export function html_div_text_content(parent, text) {
  "$plain text";
  "the text is the words to show. It is text to draw and nothing that runs.";
  "A div holding text shown exactly as written, with no character in it read as markup - the twin of the div that sets its text as markup.";
  "It is the one to use whenever the text came from somewhere else: a name a stranger typed into a booking form, shown on the host's page through the markup twin, would run as part of that page.";
  arguments_assert(arguments, 2);
  let div = html_div(parent);
  html_text_content_set(div, text);
  return div;
}
