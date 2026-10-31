import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
export function facebook_psalm_bible_url(passage) {
  arguments_assert(arguments, 1);
  ("$plain passage");
  ("The address of the bible page opened on the chapter a sung passage comes from, with the verses that are sung marked - for a reader who wants to read on from the song. passage is written the way a title names it, such as 'Psalm 145:1-13a'.");
  ("★ THE WHOLE CHAPTER WITH THE SUNG VERSES MARKED, NEVER THE ONE-VERSE VIEW. Tried on the live site 2026-10-31: the chapter view given 1-13 shows all of Psalm 145 with verses 1 to 13 marked; the one-verse view given 1-13 says it did not finish loading. A half verse such as 13a is marked whole.");
  let named = psalms_title_passage(passage);
  if (equal(named, null)) {
    throw new Error("no passage named in " + passage);
  }
  let chapter_code = ebible_chapter_code_pad("PSA", named.chapter);
  let verses =
    named.verse_first + app_shared_bible_verses_separator() + named.verse_last;
  let hash =
    app_shared_bible_mode_hash_key() +
    "=" +
    app_shared_bible_mode_chapter() +
    "," +
    app_shared_bible_chapter_hash_key() +
    "=" +
    chapter_code +
    "," +
    app_shared_bible_verse_hash_key() +
    "=" +
    verses;
  let url = cloudflare_site_url() + "/bible#" + hash;
  return url;
}
