import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
export function app_next_copy_button_counted(parent, reading_text, size) {
  "The copy button with how many verses it copies said beside it, on one line.";
  "$plain reading_text";
  "The number a reader chose is the most a message holds rather than the exact amount - a passage stops where a sentence ends - so how many they are about to copy is worth saying at the moment they copy it. Beside the button rather than above it, because it is about what the button takes, and one line costs a phone less of its first screen than two.";
  arguments_assert(arguments, 3);
  let row = html_div(parent);
  html_centered(row);
  let said = word_count_pluralize(size, "verse");
  let label = html_span_text(row, said);
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_x(label, value);
  async function lambda() {
    await clipboard_copy_try(reading_text);
  }
  let component = app_shared_button_copy(row, lambda);
  return component;
}
