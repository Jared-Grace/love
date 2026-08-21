import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
export function app_shared_privacy_policy_part_show(paragraph, part) {
  "One piece of a privacy policy paragraph drawn into the paragraph it belongs to, as words or as a link depending on which kind of piece it is.";
  "A policy that names an address a person is meant to be able to go to should let them go there, rather than making them copy a line of text out of a paragraph and type it somewhere else. The addresses named lead off this website, so they open in a new tab and leave the policy still open behind them.";
  arguments_assert(arguments, 2);
  if (text_is(part)) {
    html_span_text(paragraph, part);
    return;
  }
  html_a_href_text_new_tab(paragraph, part.url, part.text);
}
