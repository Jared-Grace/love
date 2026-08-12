import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_chapter_hash_get_or_empty(hash) {
  arguments_assert(arguments, 1);
  ("The chapter a link asks for, or nothing at all when the link does not name one.");
  ("A link that names a book and no chapter is not a broken link, it is somebody part way through choosing: they have said which book and have not yet said which chapter. The twin of this reads the same word and stops everything when it is not there, which is the right answer for a page that cannot draw a single line without knowing the chapter. It is the wrong answer for a page whose whole job is to ask which chapter, and asking it there is what turned an ordinary half-made choice into a blank screen.");
  ("So the two live side by side and each page says which of them it means, the same way the plain reading of a word and the reading that will settle for nothing already sit side by side everywhere else in this repo.");
  let property_name = app_shared_bible_chapter_hash_key();
  let chapter_code = property_get_or(hash, property_name, "");
  return chapter_code;
}
