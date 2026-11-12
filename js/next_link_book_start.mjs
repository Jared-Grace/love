import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_bible_verses_count_hash_key } from "./app_shared_bible_verses_count_hash_key.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
export function next_link_book_start(book_code, count, languages) {
  "$plain book_code";
  "$plain count";
  "$plain languages";
  "The next-passage link that starts a book at its first verse, count verses at a time, in the languages given.";
  "Written in the order the page writes its own onward links - chapter, verse, count, languages - so a link started here reads the same as one the page carried on.";
  let hash = {};
  hash[app_shared_bible_chapter_hash_key()] = text_combine_multiple([
    book_code,
    "01",
  ]);
  hash[app_shared_bible_verse_hash_key()] = "1";
  hash[app_shared_bible_verses_count_hash_key()] = count;
  hash[app_shared_bible_language_hash_key()] = list_join_plus(languages);
  let site = cloudflare_site_url();
  let url2 = hash_to_url(hash);
  let url = text_combine_multiple([site, "/next", url2]);
  return url;
}
