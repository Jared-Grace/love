import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_bible_folder_first } from "./app_shared_bible_folder_first.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { app_bible_record_verses_sentences } from "./app_bible_record_verses_sentences.mjs";
import { list_map } from "./list_map.mjs";
export async function app_bible_record_passages_download(chapter_code) {
  "$plain chapter_code";
  "How one chapter is split into the passages bible_record puts a recorder under. Every chapter of the Bible can be recorded (asked for by the human 2026-11-22), not only the ones with a sermon.";
  "A chapter with an approved sermon keeps the sermon's passages, so a recording lines up with the sermon preached on it. Any other chapter is split into the shortest passages that each end a sentence: short takes are easy to redo, and none stops mid-thought.";
  "REJECTED: the whole chapter as one passage - a long chapter becomes one long take, and one slip means recording all of it again. REJECTED: one verse per passage, which was offered before - a verse is where a bible was divided, not where a sentence ends, so a take often stopped mid-sentence.";
  "The verse numbers are read from the first chosen language's bible, the same one the recording draws its words from, so every passage offered is one the recording can show.";
  arguments_assert(arguments, 1);
  async function sermon() {
    let d = await app_bible_sermons_download(chapter_code);
    return d;
  }
  let downloaded = await catch_null_async(sermon);
  if (null_not_is(downloaded)) {
    return downloaded;
  }
  let bible_folder = app_shared_bible_folder_first();
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  ("SPLIT AT SENTENCE ENDS (human 2026-11-24): each passage runs to the verse that finishes its sentence in the bible the words come from, so a take never stops mid-sentence.");
  function one(verse_numbers) {
    let passage = {
      verse_numbers,
      lines: [],
    };
    return passage;
  }
  let groups = app_bible_record_verses_sentences(verses, bible_folder);
  let passages = list_map(groups, one);
  let r = {
    passages,
  };
  return r;
}
