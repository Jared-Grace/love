import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
export function facebook_bible_sermon_url(chapter_code, verse_number) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("The address of the sermons app opened on one verse, for a reader who wants to read on from a sermon post. The verse is the first one the post preaches on, so the page opens on the sermon they just read.");
  let hash =
    app_shared_bible_chapter_hash_key() +
    "=" +
    chapter_code +
    "," +
    app_shared_bible_verse_hash_key() +
    "=" +
    verse_number;
  let url = cloudflare_site_url() + "/bible_sermons#" + hash;
  return url;
}
