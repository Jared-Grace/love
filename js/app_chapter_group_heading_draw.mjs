import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_last } from "./list_last.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_map } from "./list_map.mjs";
import { app_chapter_group_text } from "./app_chapter_group_text.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_chapter_group_name } from "./app_chapter_group_name.mjs";
export function app_chapter_group_heading_draw(
  parent,
  chapter_code,
  group,
  texts,
) {
  "$plain parent";
  "$plain chapter_code";
  "$plain group";
  "$plain texts";
  "What stands at the top of one group: which verses it holds, a button that copies their words, a button that copies their reference, and a line saying what was just copied.";
  "The words are looked up when a button is pressed and not when it is drawn, because the heading is drawn before the words have arrived.";
  arguments_assert(arguments, 4);
  let first = list_get(group, 0);
  let last = list_last(group);
  let label = text_combine_multiple(["📖 Verses ", first, " - ", last]);
  if (equal(first, last)) {
    label = text_combine_multiple(["📖 Verse ", first]);
  }
  html_p_text(parent, label);
  let said = null;
  function piece_get(number) {
    let piece = property_get_or(texts, number, {
      before: " ",
      text: "",
    });
    return piece;
  }
  async function copy() {
    let pieces = list_map(group, piece_get);
    let line = app_chapter_group_text(pieces);
    await clipboard_copy_browser(line);
    html_text_set(said, "✅ Copied");
  }
  let copy_label = html_button_copy_text();
  app_shared_button(parent, copy_label, copy);
  async function name_copy() {
    let name = app_chapter_group_name(chapter_code, first, last);
    await clipboard_copy_browser(name);
    let told = text_combine_multiple(["✅ Copied ", name]);
    html_text_set(said, told);
  }
  app_shared_button(parent, "🏷️ Copy reference", name_copy);
  said = html_p_text(parent, "");
}
