import { ebible_book_code_label } from "./ebible_book_code_label.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { bible_usfm_passage_choose } from "./bible_usfm_passage_choose.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { bible_usfm_chapters_render } from "./bible_usfm_chapters_render.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function lyric_timing_screen_choose(parent, version_input, chosen) {
  "$plain parent";
  "$plain version_input";
  "$plain chosen";
  "The row saying which passage is being timed, worked the way the bible readers' own row is worked: one button for the book, one for the chapter, and the list each opens drawn underneath.";
  "THE BOOK AND THE CHAPTER ARE TWO BUTTONS AND NOT ONE. Almost every change made here is a change of chapter inside the book already chosen - a psalm, then the next psalm - and a single button spelling the whole passage sent that ordinary move through the list of sixty six books first. Two buttons put each of the two questions one press away from the person asking it, which is what the bible readers already do and what somebody arriving from one of them expects.";
  "A BOOK CODE TYPED FROM MEMORY WAS THE ONE THING ON THIS SCREEN A PERSON COULD SIMPLY GET WRONG. Everything else here is heard or pressed; that box asked for three letters nobody knows, and a wrong three letters is not refused - it writes the times of the psalm just sung into the document of a book nobody opened.";
  "Pressing the book leads on to the chapters of whatever book was pressed, because choosing a book and then not choosing a chapter leaves the passage half changed. Pressing the chapter opens the chapters alone, which is the move the row exists for.";
  "The panel is emptied once a chapter is pressed. A picker left standing after it has been used is a screen still asking a question that has been answered.";
  function book_said() {
    let said = ebible_book_code_label(chosen.book_code);
    return said;
  }
  function chapter_said() {
    let said = "" + chosen.chapter_number;
    return said;
  }
  function buttons_show() {
    let book_text = book_said();
    html_text_set(button_book, book_text);
    let chapter_text = chapter_said();
    html_text_set(button_chapter, chapter_text);
  }
  function on_chosen(book_code, chapter_number) {
    chosen.book_code = book_code;
    chosen.chapter_number = chapter_number;
    html_clear(panel);
    buttons_show();
  }
  async function on_book() {
    let version = html_value_get(version_input);
    await bible_usfm_passage_choose(
      panel,
      version,
      chosen.book_code,
      on_chosen,
    );
  }
  function on_chapter_chosen(chapter_code) {
    let chapter_number = ebible_chapter_code_to_number(chapter_code);
    on_chosen(chosen.book_code, chapter_number);
  }
  async function on_chapter() {
    let version = html_value_get(version_input);
    await bible_usfm_chapters_render(
      panel,
      version,
      chosen.book_code,
      on_chapter_chosen,
    );
  }
  let row = html_div(parent);
  let book_text2 = book_said();
  let button_book = app_shared_button(row, book_text2, on_book);
  let chapter_text2 = chapter_said();
  let button_chapter = app_shared_button(row, chapter_text2, on_chapter);
  let panel = html_div(parent);
  return row;
}
