import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_card_container_dom } from "./example_card_container_dom.mjs";
import { example_card_title_note_dom } from "./example_card_title_note_dom.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
// A rejection example as DOM: title, note, the call block (red left edge), and
// the expected outcome.
export function example_rejection_card_dom(parent, example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let call = property_get(example, "call");
  let expect_text = property_get(example, "expectText");
  let alias = property_get(example, "alias");
  let card = example_card_container_dom(parent);
  example_card_title_note_dom(card, title, note, alias);
  let block = example_code_block_dom(card, call);
  html_style_set(block, "border-left", "3px solid #d33");
  html_style_set(block, "margin-top", "0.75rem");
  let expect = html_div(card);
  html_text_set(expect, expect_text);
  html_style_set(expect, "color", "#d33");
  html_style_set(expect, "font-weight", "600");
  html_style_set(expect, "margin-top", "0.5rem");
  return card;
}
