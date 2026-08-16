import { chapter_passage_write } from "./chapter_passage_write.mjs";
import { each_async } from "./each_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_entries_words_unicode_repair } from "./gloss_entries_words_unicode_repair.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_words_unicode_repair(
  chapter_code,
  fn,
  words_read,
) {
  "Put back, across a whole authored gloss chapter, the exact letters each passage is written with, wherever an explanation names the same word in a different spelling of the same letters - answering with what it mended, passage by passage.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "It finds its own work rather than being handed a list, because the places where the spellings drifted apart are exactly the places nobody can see - a word typed out again looks right on the screen and is only caught by comparing it with the passage.";
  "A chapter nobody has authored comes back with nothing mended, and so does a chapter that was already right, which is what lets this be run over any chapter at any time.";
  "Only the passages that changed are written back out, so a chapter needing nothing is left with its bytes exactly where they were.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let unwritten = {
      chapter_code,
      repaired: [],
    };
    return unwritten;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let repaired = [];
  async function passage_repair(passage) {
    let entries = gloss_passage_entries(passage);
    if (list_empty_is(entries)) {
      return;
    }
    let written = gloss_passage_words_bare(passage, words_read);
    let words = gloss_entries_words_unicode_repair(entries, written);
    let changes = gloss_passage_entries_changed_set(passage, entries, words);
    if (list_empty_is(changes)) {
      return;
    }
    await chapter_passage_write(chapter_code, fn, passage);
    let verses = g_sermon_passage_verses_key(passage);
    let mended = {
      verses,
      words,
    };
    list_add(repaired, mended);
  }
  await each_async(passages, passage_repair);
  let r = {
    chapter_code,
    repaired,
  };
  return r;
}
