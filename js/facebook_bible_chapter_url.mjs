import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
export function facebook_bible_chapter_url(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("The address of the bible page opened on one whole chapter, for a reader who wants to read it there.");
  let hash =
    app_shared_bible_mode_hash_key() +
    "=" +
    app_shared_bible_mode_chapter() +
    "," +
    app_shared_bible_chapter_hash_key() +
    "=" +
    chapter_code;
  let url = cloudflare_site_url() + "/bible#" + hash;
  return url;
}
