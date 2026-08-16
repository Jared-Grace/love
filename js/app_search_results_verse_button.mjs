import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_open } from "./app_shared_bible_open.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { app_shared_bible_reference_entries } from "./app_shared_bible_reference_entries.mjs";
import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
export function app_search_results_verse_button(
  verse_number,
  div_chapter,
  chapter_code,
  books,
  languages_chosen,
) {
  arguments_assert(arguments, 5);
  let div_verse = html_div(div_chapter);
  html_display_inline_block(div_verse);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let b = null;
  async function click() {
    let already_expanded = property_exists(b, "bible_texts");
    if (already_expanded) {
      return;
    }
    let bible_texts = [];
    property_set_exists_not(b, "bible_texts", bible_texts);
    html_display_block(div_verse);
    html_remove(b);
    let cb_text = html_button_copy_text();
    let cb = app_shared_button_wide(div_verse, cb_text, copy);
    html_style_margin_y(cb, "0.2em");
    function lambda3() {
      "this button offers the whole chapter, so land in the chapter reader with this verse in view";
      let mode = app_shared_bible_mode_chapter();
      app_shared_bible_open(languages_chosen, chapter_code, verse_number, mode);
    }
    let left = emoji_book_open();
    let oc = app_shared_button_wide_text_combine(
      div_verse,
      left,
      " Open chapter",
      lambda3,
    );
    html_style_margin_y(oc, "0.2em");
    let entries = await app_shared_bible_reference_entries(
      reference,
      languages_chosen,
    );
    ("the reference heads the verse the way it does in the supper and verses apps, set back so the words of the verse are what the eye lands on");
    app_shared_bible_verse_block(div_verse, reference, entries);
    ("what gets copied is the reference then each language's words, in the order they are read on the page");
    list_add(bible_texts, reference);
    let texts = list_map_property(entries, "text");
    list_add_multiple(bible_texts, texts);
    async function copy() {
      await list_join_newline_2_copy(bible_texts);
    }
  }
  b = app_shared_button_inline(div_verse, verse_number, click);
  property_set_exists_not(b, "click", click);
  return b;
}
