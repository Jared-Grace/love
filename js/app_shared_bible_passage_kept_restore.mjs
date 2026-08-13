import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_passage_kept_restore(context) {
  "Put the remembered passage back into the link, undoing whatever a half-finished choosing wrote there.";
  "Choosing a book writes a chapter into the link before a chapter has been chosen, because the chapter picker is handed its book that way. So by the second screen the link no longer says where somebody came from, and leaving by the way out would have landed them somewhere they never asked for. The remembering is what makes the way out honest.";
  "The chapter is the only word put back, because it is the only word the choosing overwrites. Which verses are picked is written by the verse picker, and that one hands the reader straight home rather than leaving anybody standing on a picker afterwards - so all the way through the choosing the link still says which verses were picked before it began, and writing them again would only write what is already there.";
  "Everything else the link carries - how many verses to a message, which bibles to read - was not touched by the choosing either, and is somebody's setting rather than their place, so restoring it would undo a change they meant.";
  arguments_assert(arguments, 1);
  let kept = app_shared_bible_passage_kept_get(context);
  let nothing = null_is(kept);
  if (nothing) {
    return;
  }
  let chapter_code = property_get(kept, "chapter_code");
  let property_name = app_shared_bible_chapter_hash_key();
  html_hash_property_set(property_name, chapter_code);
}
