import { arguments_assert } from "./arguments_assert.mjs";
import { list_previous_try } from "./list_previous_try.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { app_emoji_bible_chapter_go } from "./app_emoji_bible_chapter_go.mjs";
import { app_emoji_bible_chapter_hash } from "./app_emoji_bible_chapter_hash.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_button_arrow_previous_notext } from "./app_shared_button_arrow_previous_notext.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_arrow_next_notext } from "./app_shared_button_arrow_next_notext.mjs";
export function app_emoji_bible_chapter_bar(bar, chapters, chosen) {
  arguments_assert(arguments, 3);
  ("Where in the picture Bible the reader is standing, and the three ways out of it: an arrow to each neighbouring written chapter, and the reference itself, which goes back to the list.");
  ("IT IS THE BIBLE READER'S OWN BAR, built out of the same two arrows and the same button rather than out of a copy of how they look. A reader who has used the other app has already learned this one, and a change to how a bar reads there arrives here without anybody carrying it over.");
  ("AN ARROW IS DRAWN ONLY WHERE THERE IS SOMEWHERE TO GO. This list is what has been written rather than a whole canon, so its ends are real ends, and an arrow that did nothing would be the page's only lie about how much of this Bible exists.");
  ("THE NEIGHBOURS ARE THE NEIGHBOURS IN THIS LIST AND NOT IN SCRIPTURE, which is a different reading order from the one next door and the right one here. Somebody working through what has been written wants the next written thing; somebody who wants the next chapter of a book knows its name and can ask the list for it.");
  let previous = list_previous_try(chapters, chosen);
  let next = list_next_try(chapters, chosen);
  function on_previous() {
    app_emoji_bible_chapter_go(previous);
  }
  function on_next() {
    app_emoji_bible_chapter_go(next);
  }
  function on_index() {
    let none = app_emoji_bible_chapter_hash("");
    html_hash_name_reload(none);
  }
  let previous_is = null_not_is(previous);
  if (previous_is) {
    app_shared_button_arrow_previous_notext(bar, on_previous);
  }
  let reference = property_get(chosen, "reference");
  app_shared_button(bar, reference, on_index);
  let next_is = null_not_is(next);
  if (next_is) {
    app_shared_button_arrow_next_notext(bar, on_next);
  }
}
