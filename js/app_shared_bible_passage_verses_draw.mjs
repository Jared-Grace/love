import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_size } from "./text_size.mjs";
import { list_max } from "./list_max.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_verse_entries } from "./app_shared_bible_verse_entries.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_passage_verses_draw(
  top,
  languages_available,
  chapter_code,
  verse_numbers,
) {
  "Every verse of a passage, in place of the one verse the screen first drew, each with its number beside it, so the reader sees the whole passage its explanation is about.";
  "Each language's code goes with its text, so a tapped English word still offers to be said.";
  arguments_assert(arguments, 4);
  html_clear(top);
  let show_language_names = list_multiple_is(languages_available);
  function with_code(item) {
    let language = property_get(item, "language");
    let language_code = property_get_or_null(language, "language_code");
    let verses = property_get(item, "verses");
    let entry = {
      language,
      verses,
      language_code,
    };
    return entry;
  }
  let languages = list_map(languages_available, with_code);
  ("THE NUMBER COLUMN IS AS WIDE AS THIS PASSAGE'S LONGEST NUMBER AND NO WIDER (asked for by the human 2026-11-22: the numbers had a lot of space either side). The chapter reader's gutter is sized for a three-digit number inside a button with a border, and here the number is plain text, so borrowing it left a wide empty margin. Every row of one passage gets the same width, so 9 and 10 still line up; the number sits against the end of its column, next to the words it numbers.");
  function verse_number_digits(verse_number) {
    let shown = text_to(verse_number);
    let r = text_size(shown);
    return r;
  }
  let list = list_map(verse_numbers, verse_number_digits);
  let widest = list_max(list);
  let left = text_combine(widest, "ch");
  function draw_verse(verse_number) {
    let row = html_div(top);
    html_display_grid(row);
    let columns = text_combine(left, " 1fr");
    html_style_set(row, "grid-template-columns", columns);
    let gap = app_shared_spaced_small_gap();
    html_style_set(row, "column-gap", gap);
    let number = html_div_text(row, verse_number);
    html_style_set(number, "text-align", "end");
    ("the number steps back into the same grey every other quieted word in these apps uses, so the eye goes to the words of the verse and the number is there only for whoever looks for it.");
    app_shared_text_deemphasized(number);
    let text_cell = html_div(row);
    let entries = app_shared_bible_verse_entries(
      languages,
      chapter_code,
      verse_number,
      show_language_names,
    );
    app_shared_bible_verse_texts(text_cell, entries);
  }
  each(verse_numbers, draw_verse);
}
