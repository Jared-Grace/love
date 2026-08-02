import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_chapter_hash_get(hash) {
  arguments_assert(arguments, 1);
  ("The chapter a link asks for, read out of the link's own words.");
  ("The word standing before it is kept somewhere it can never quietly change,");
  ("because links people saved months ago still spell it. Every page that opens on");
  ("a chapter asked for that word and then looked it up, and the looking up is the");
  ("only thing any of them wanted.");
  let property_name = app_shared_bible_chapter_hash_key();
  let chapter_code = property_get(hash, property_name);
  return chapter_code;
}
