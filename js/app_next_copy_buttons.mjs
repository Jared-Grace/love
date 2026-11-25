import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { emoji_copy } from "./emoji_copy.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_next_copy_buttons(parent, size, text_onward, text_here) {
  "The two ways to copy the passage, side by side at the top of the card with how many verses they copy said beside them: one carries the link on to the next passage, the other the link back to this one.";
  "$plain text_onward";
  "$plain text_here";
  "They were one copy, and which link it carried was decided by a word in the address. But which link to send is a question about the message being written, not about the page - somebody sending a passage a day wants the link onward, somebody sharing one passage wants the link to it - so both are offered and the reader picks at the moment of copying.";
  arguments_assert(arguments, 4);
  let row = html_div(parent);
  html_centered(row);
  let said = word_count_pluralize(size, "verse");
  let label = html_span_text(row, said);
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_x(label, value);
  let sign = emoji_copy();
  let text_next = text_combine_middle_space(
    sign,
    "Copy passage with link to next",
  );
  async function copy_onward() {
    await clipboard_copy_try(text_onward);
  }
  app_shared_button(row, text_next, copy_onward);
  let text_itself = text_combine_middle_space(
    sign,
    "Copy passage with link to itself",
  );
  async function copy_here() {
    await clipboard_copy_try(text_here);
  }
  let component = app_shared_button(row, text_itself, copy_here);
  return component;
}
