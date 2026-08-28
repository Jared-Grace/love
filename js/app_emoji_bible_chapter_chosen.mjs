import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function app_emoji_bible_chapter_chosen(chapters) {
  arguments_assert(arguments, 1);
  ("Which chapter of the picture Bible the link is asking for, or nothing at all when it asks for none and nothing when it asks for one this Bible has not reached yet.");
  ("$plain chapters");
  ("the chapters are the picture Bible's own written ones. They name what may be opened and nothing that runs.");
  ("IT READS THE LINK WITH THE BIBLE READER'S OWN READER, so the two apps cannot drift about what a link means. A word spelled twice is a word that can be changed once.");
  ("AN UNWRITTEN CHAPTER COMES BACK AS NOTHING RATHER THAN AS AN ERROR. A link is the thing a stranger is handed, and a stranger holding a link to a chapter nobody has written yet must land on the list of what IS written rather than on a page with a hole in it.");
  ("That is the same answer a reader who asked for nothing gets, and it is the same answer on purpose: both of them are somebody who does not yet know what is here.");
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let none = text_empty_is(chapter_code);
  if (none) {
    return null;
  }
  let chapter = list_find_property_or_null(
    chapters,
    "chapter_code",
    chapter_code,
  );
  return chapter;
}
