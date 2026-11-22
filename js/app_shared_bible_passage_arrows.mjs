import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_change } from "./app_shared_bible_passage_change.mjs";
import { list_previous_try } from "./list_previous_try.mjs";
import { app_shared_bible_chapter_previous_last_verse } from "./app_shared_bible_chapter_previous_last_verse.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { app_shared_bible_chapter_next } from "./app_shared_bible_chapter_next.mjs";
import { app_shared_scroll_top_button } from "./app_shared_scroll_top_button.mjs";
import { app_shared_bible_passage_previous_text_get } from "./app_shared_bible_passage_previous_text_get.mjs";
import { app_shared_bible_passage_next_text_get } from "./app_shared_bible_passage_next_text_get.mjs";
import { app_shared_arrows_wide } from "./app_shared_arrows_wide.mjs";
export function app_shared_bible_passage_arrows(
  context,
  chapter_code,
  passages,
  passage,
  foot,
) {
  "The two ways on from the passage being read - back one passage and forward one - in the held foot of the page, with the same mark back to the top between them as the verse arrows have.";
  arguments_assert(arguments, 5);
  async function previous() {
    await app_shared_bible_passage_change(
      context,
      chapter_code,
      passages,
      passage,
      list_previous_try,
      app_shared_bible_chapter_previous_last_verse,
    );
  }
  async function next() {
    await app_shared_bible_passage_change(
      context,
      chapter_code,
      passages,
      passage,
      list_next_try,
      app_shared_bible_chapter_next,
    );
  }
  function middle(row) {
    app_shared_scroll_top_button(row);
  }
  let text_previous = app_shared_bible_passage_previous_text_get();
  let text_next = app_shared_bible_passage_next_text_get();
  app_shared_arrows_wide(
    foot,
    text_previous,
    text_next,
    previous,
    next,
    middle,
  );
}
