import { app_shared_bible_passage_kept_set } from "./app_shared_bible_passage_kept_set.mjs";
import { app_shared_bible_read_verse_row_cells } from "./app_shared_bible_read_verse_row_cells.mjs";
import { app_shared_bible_read_verse_actions } from "./app_shared_bible_read_verse_actions.mjs";
import { app_shared_bible_read_verse_row_grid } from "./app_shared_bible_read_verse_row_grid.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { app_shared_bible_toggle_update } from "./app_shared_bible_toggle_update.mjs";
import { app_shared_bible_read_persist_selection } from "./app_shared_bible_read_persist_selection.mjs";
import { app_shared_bible_read_count_refresh } from "./app_shared_bible_read_count_refresh.mjs";
import { app_shared_bible_read_selection_last } from "./app_shared_bible_read_selection_last.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_bible_read_verse_row(
  v,
  chapter_code,
  books_en,
  content,
  updates,
  verse_numbers_chosen,
  languages_verses,
  dismiss_help,
  max,
  count_status,
  show_language_names,
  verse_action,
  context,
  t,
  languages_chosen,
  verse_rows,
) {
  arguments_assert(arguments, 16);
  let property_name = verse_number_key();
  let verse_number_v = property_get(v, property_name);
  let verse_chapter_code = property_get_or(v, "chapter_code", chapter_code);
  let verse_book_code = ebible_chapter_code_to_book(verse_chapter_code);
  let verse_book_name = ebible_book_code_to_name(books_en, verse_book_code);
  let verse_chapter_name = ebible_chapter_code_to_name(verse_chapter_code);
  let p = app_shared_bible_read_verse_row_grid(content, v);
  let r = app_shared_bible_toggle_update(
    updates,
    verse_numbers_chosen,
    verse_number_v,
    verse_chapter_code,
    languages_verses,
    p,
  );
  let select = property_get(r, "select");
  function select_persist() {
    select();
    app_shared_bible_read_persist_selection(verse_numbers_chosen);
    dismiss_help();
    app_shared_bible_read_count_refresh(
      verse_numbers_chosen,
      max,
      count_status,
    );
    ("Picking a verse moves where you are reading just as truly as turning the page does, so the passage is written down again here. Turning the page draws the reading afresh and the drawing writes it down; picking a verse changes only this row and the link, and nothing draws, so a note taken at drawing time alone would keep saying the chapter somebody arrived at hours ago.");
    app_shared_bible_passage_kept_set(
      context,
      chapter_code,
      verse_numbers_chosen,
    );
  }
  app_shared_bible_read_verse_row_cells(
    p,
    verse_number_v,
    select_persist,
    languages_verses,
    show_language_names,
  );
  let update = property_get(r, "update");
  let copy = property_get(r, "copy");
  let r2 = app_shared_bible_read_verse_actions(
    content,
    verse_chapter_name,
    verse_book_name,
    verse_number_v,
    verse_action,
    context,
    verse_chapter_code,
    t,
    copy,
    verse_numbers_chosen,
    languages_chosen,
  );
  let verse_buttons = property_get(r2, "verse_buttons");
  let actions = property_get(r2, "actions");
  function row_update() {
    update();
    let right = app_shared_bible_read_selection_last(verse_numbers_chosen);
    let is_last = equal(verse_number_v, right);
    let hidden = not(is_last);
    html_display_none_or_block(hidden, actions);
    let b = list_multiple_is(verse_numbers_chosen);
    let single = is_last && not(b);
    let hidden2 = not(single);
    html_display_none_or_block(hidden2, verse_buttons);
  }
  list_add(verse_rows, {
    verse_number: verse_number_v,
    p,
  });
  return row_update;
}
