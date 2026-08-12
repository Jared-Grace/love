import { list_last } from "./list_last.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
export function app_next_url_onward(hash, list, run) {
  "The link to what comes after the verses just shown, written as this page's own address with the reading moved on.";
  "Everything else about the link is kept - which languages, how many verses - because somebody following it is the same reader carrying on, and only where they are has changed.";
  "The way onward wraps round to the first verse of the bible rather than running out at the last one. Asking for what follows the end of a list is not a question a list answers, and the refusal used to arrive as a thrown assertion, from a place the page reaches before it has drawn anything - so the page kept the words it paints while it starts and sat on One moment, please for ever. A hang says less than an error does, and this one said nothing at all.";
  "Wrapping rather than leaving the link off, because somebody who has read to the end of the bible is somebody still reading.";
  let last = list_last(run);
  let next = list_next_wrap(list, last);
  let chapter_code = property_get(next, "chapter_code");
  let property_name = verse_number_key();
  let verse_number = property_get(next, property_name);
  let property_name2 = app_shared_bible_verse_hash_key();
  property_set(hash, property_name2, verse_number);
  let property_name3 = app_shared_bible_chapter_hash_key();
  property_set(hash, property_name3, chapter_code);
  let h = hash_to_url(hash);
  let url = html_url_without_hash();
  url += h;
  return url;
}
