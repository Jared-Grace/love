import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { bible_usfm_passage_choose } from "./bible_usfm_passage_choose.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_div } from "./html_div.mjs";
export function lyric_timing_screen_choose(parent, version_input, chosen) {
  arguments_assert(arguments, 3);
  ("$plain parent");
  ("$plain version_input");
  ("$plain chosen");
  ("The one button saying which passage is being timed and opening the bible to change it, with the choice kept where the rest of the screen can read it.");
  ("A BOOK CODE TYPED FROM MEMORY WAS THE ONE THING ON THIS SCREEN A PERSON COULD SIMPLY GET WRONG. Everything else here is heard or pressed; that box asked for three letters nobody knows, and a wrong three letters is not refused - it writes the times of the psalm just sung into the document of a book nobody opened.");
  ("The button wears the passage rather than a word like change, so the screen says what it is about to save without anything else being read. Pressing it opens the same canon the bible apps offer, in place, under the button.");
  ("The panel is emptied once a chapter is pressed. A picker left standing after it has been used is a screen still asking a question that has been answered.");
  function passage_said() {
    let said = chosen.book_code + " " + chosen.chapter_number;
    return said;
  }
  async function on_change() {
    let version = html_value_get(version_input);
    await bible_usfm_passage_choose(
      panel,
      version,
      chosen.book_code,
      on_chosen,
    );
  }
  function on_chosen(book_code, chapter_number) {
    chosen.book_code = book_code;
    chosen.chapter_number = chapter_number;
    html_clear(panel);
    html_text_set(button, passage_said());
  }
  let button = app_shared_button(parent, passage_said(), on_change);
  let panel = html_div(parent);
  return button;
}
