import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export async function app_bible_record_passages_download(chapter_code) {
  "$plain chapter_code";
  "How one chapter is split into the passages bible_record puts a recorder under. Every chapter of the Bible can be recorded (asked for by the human 2026-11-22), not only the ones with a sermon.";
  "A chapter with an approved sermon keeps the sermon's passages, so a recording lines up with the sermon preached on it. Any other chapter is split one verse per passage: short takes are easy to redo, and a verse is the one split every chapter already has.";
  "REJECTED: the whole chapter as one passage - a long chapter becomes one long take, and one slip means recording all of it again.";
  "The verse numbers are read from the English version, the same one the recording draws its words from, so every passage offered is one the recording can show.";
  arguments_assert(arguments, 1);
  async function sermon() {
    let d = await app_bible_sermons_download(chapter_code);
    return d;
  }
  let downloaded = await catch_null_async(sermon);
  if (null_not_is(downloaded)) {
    return downloaded;
  }
  let bible_folder = ebible_folder_english();
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let key = verse_number_key();
  function one(verse) {
    let verse_number = property_get(verse, key);
    let passage = {
      verse_numbers: [verse_number],
      lines: [],
    };
    return passage;
  }
  let passages = list_map(verses, one);
  let r = {
    passages,
  };
  return r;
}
