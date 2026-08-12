import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_chapter_code_default } from "./app_shared_bible_chapter_code_default.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_shared_bible_chapter_hash_get_or_default(hash) {
  arguments_assert(arguments, 1);
  ("The chapter a link asks for, or the chapter this repo opens on when the link asks for none.");
  ("Three readings of the same word sit side by side now and each page means exactly one of them. A page that cannot draw a line without knowing the chapter asks the one that stops everything. A page whose whole job is to ask which chapter wants the one that answers with nothing, because nothing is the very state it is there to serve. And a page that simply has to show something asks this one, which never comes back empty-handed.");
  ("Naming the third was what turned a page that hung for ever into a page that opens. Reaching for the first because it was the only one there is how the hang was written, and it is worth having the third to reach for instead.");
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let none = text_empty_is(chapter_code);
  if (none) {
    let started = app_shared_bible_chapter_code_default();
    return started;
  }
  return chapter_code;
}
