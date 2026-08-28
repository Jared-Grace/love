import { arguments_assert } from "./arguments_assert.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { property_get } from "./property_get.mjs";
import { app_emoji_bible_chapter_hash } from "./app_emoji_bible_chapter_hash.mjs";
import { app_shared_button_wide_link_hash_name } from "./app_shared_button_wide_link_hash_name.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_emoji_bible_chapter_index(content, chapters) {
  arguments_assert(arguments, 2);
  ("The list of every chapter of the picture Bible that has been written, each one a link that opens it.");
  ("IT LISTS WHAT EXISTS RATHER THAN WHAT THE CANON HOLDS, which is the one place this page's shape departs from the bible reader next door. That reader offers the sixty six books because it has all of them; a book picker here would offer eleven hundred and sixty four chapters that are not written and twenty five that are, which is a picker that mostly says no.");
  ("The departure is about coverage and not about design, and it ends by itself. The moment the picture Bible holds whole books, the picker it grows into is the reader's own.");
  ("EACH ROW IS A REAL LINK RATHER THAN SOMETHING ONLY THIS PAGE CAN RUN, because a chapter is the thing here most likely to be handed to somebody. A browser offers to copy where something goes, or to open it in a new tab, or to keep it for later, only when the thing pressed really is a link.");
  ("The width of a thumb, for the reason the songs next door are: on a phone this list is the whole way in, and a wide card is the difference between reaching a chapter in one tap and in three.");
  let heading = "The chapters written so far.";
  html_p_text(content, heading);
  for (let chapter of chapters) {
    let reference = property_get(chapter, "reference");
    let chapter_code = property_get(chapter, "chapter_code");
    let hash = app_emoji_bible_chapter_hash(chapter_code);
    let button = app_shared_button_wide_link_hash_name(
      content,
      hash,
      reference,
    );
    app_shared_button_gap_above(button);
  }
}
