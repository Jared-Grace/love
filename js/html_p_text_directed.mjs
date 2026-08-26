import { arguments_assert } from "./arguments_assert.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_text_direction_set } from "./html_text_direction_set.mjs";
export function html_p_text_directed(root, text) {
  "A line of prose that runs the way its own words run, rather than the way the page around it happens to run.";
  "The words are already written by the time this is called, so nothing has to be told which language they are in - the letters say it. That is what makes it safe to put an English sentence and an Urdu one on the same page and have each one begin at its own end.";
  "It exists because a paragraph is the shape this is forgotten in. A box someone types into looks like it needs saying and gets it; a sentence sitting above that box looks like plain text and gets nothing, and then reads from the wrong edge in every right-to-left language the app speaks.";
  arguments_assert(arguments, 2);
  let p = html_p_text(root, text);
  html_text_direction_set(p, text);
  return p;
}
