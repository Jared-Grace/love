import { ebible_chapter_code_normalize } from "./ebible_chapter_code_normalize.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_chapter_hash_get_or_empty(hash) {
  arguments_assert(arguments, 1);
  ("The chapter a link asks for, or nothing at all when the link does not name one.");
  ("A link that names a book and no chapter is not a broken link, it is somebody part way through choosing: they have said which book and have not yet said which chapter. The twin of this reads the same word and stops everything when it is not there, which is the right answer for a page that cannot draw a single line without knowing the chapter. It is the wrong answer for a page whose whole job is to ask which chapter, and asking it there is what turned an ordinary half-made choice into a blank screen.");
  ("So the two live side by side and each page says which of them it means, the same way the plain reading of a word and the reading that will settle for nothing already sit side by side everywhere else in this repo.");
  ("THE WORD IS PUT INTO CAPITALS AS IT COMES OUT OF THE LINK, THE SAME WAY THE BOOK BESIDE IT IS. A chapter carries its book inside its own name, so a link written in small letters yields a small-letters book to every page that takes the book out of it, and nothing downstream is looking for a spelling mistake - it is looking up a code, and a code that is not there reads as a book this bible does not carry. The normalizer was written for this and had never been called; it is also where a later kindness would go, such as letting mk stand for Mark.");
  let property_name = app_shared_bible_chapter_hash_key();
  let chapter_code = property_get_or(hash, property_name, "");
  let chapter_code_upper = ebible_chapter_code_normalize(chapter_code);
  return chapter_code_upper;
}
