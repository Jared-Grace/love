import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_quotes_chapter_file_path } from "./gloss_quotes_chapter_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_write_files_stale_generic } from "./gloss_write_files_stale_generic.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { error } from "./error.mjs";
import { ebible_urdu_chapters_quote_index } from "./ebible_urdu_chapters_quote_index.mjs";
import { gloss_word_keys_reader_one } from "./gloss_word_keys_reader_one.mjs";
import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { app_en_learn_bible_gloss_urdu_text_index } from "./app_en_learn_bible_gloss_urdu_text_index.mjs";
import { gloss_passages_bible_quotes_absent_urdu } from "./gloss_passages_bible_quotes_absent_urdu.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { gloss_write_files_from_store_generic } from "./gloss_write_files_from_store_generic.mjs";
import { file_delete } from "./file_delete.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_quotes_mend_file(
  chapter_code,
) {
  "Put right the Bible quotes one stored chapter of the Urdu-explained English store gets wrong, from one file pairing each quote as it is written with the words the cited chapter of the Urdu Bible really holds, and take the file away once they are stored.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN35, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  "The file is an object whose keys are quotes exactly as an explanation writes them between its single quote marks, each holding the words to write there instead. The marks are part of what is looked for, so a quote that happens to sit inside a longer one is never touched.";
  "★ A NEW QUOTE IS CHECKED AGAINST THE BIBLE BEFORE ANYTHING IS WRITTEN. The chapter is mended in memory and then asked the same question the gate asks; a replacement the cited chapter does not hold throws, and so does a quote the file names that no explanation says, because either would store nothing useful and report the same success as a mend.";
  "The hand-off files of the verses this mend changes are given the stored explanations afterwards, because the stale repair lets a hand-off file win over the store and would write the old quote straight back. A file that already disagreed with the store before the mend is left as it was, since that disagreement is a judgment about the verse this command was never asked to make.";
  "The file is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let file_path = gloss_quotes_chapter_file_path(chapter_code, fn);
  let authored = await file_read_json(file_path);
  let befores = object_property_names(authored);
  let stale_before = await gloss_write_files_stale_generic(chapter_code, fn);
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let key = gloss_entry_explain_key();
  let used = {};
  let explains = 0;
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
    let changes = [];
    for (let entry of entries) {
      let explain = property_get(entry, key);
      let mended = explain;
      for (let before of befores) {
        let marked = "'" + before + "'";
        let b = mended.includes(marked);
        if (not(b)) {
          continue;
        }
        mended = mended.split(marked).join("'" + authored[before] + "'");
        used[before] = true;
      }
      if (equal(mended, explain)) {
        continue;
      }
      entry[key] = mended;
      changes.push(entry);
      explains++;
    }
    gloss_passage_entries_changed_set(passage, entries, changes);
  }
  for (let before of befores) {
    if (not(used[before])) {
      error(
        "no explanation of " +
          chapter_code +
          " quotes '" +
          before +
          "' - the key has to be the quote exactly as written between its marks, or the mend stores nothing and still reports success",
      );
    }
  }
  let index = await ebible_urdu_chapters_quote_index();
  let word_key_read = gloss_store_word_key_read(fn);
  let word_keys_read = gloss_word_keys_reader_one(word_key_read);
  let text_index = app_en_learn_bible_gloss_urdu_text_index();
  let absent = gloss_passages_bible_quotes_absent_urdu(
    passages,
    text_index,
    word_keys_read,
    index,
  );
  function lambda(before) {
    let r2 = authored[before];
    return r2;
  }
  let afters = befores.map(lambda);
  for (let finding of absent) {
    if (afters.includes(finding.quote)) {
      error(
        "the new quote '" +
          finding.quote +
          "' in verse " +
          finding.verses_key +
          " of " +
          chapter_code +
          " is not in " +
          finding.cited +
          " of the Urdu Bible either - a replacement has to be words that chapter holds",
      );
    }
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let stale_after = await gloss_write_files_stale_generic(chapter_code, fn);
  function lambda2(v) {
    let b2 = stale_before.includes(v);
    let n = not(b2);
    return n;
  }
  let moved = stale_after.filter(lambda2);
  let handed_off = await gloss_write_files_from_store_generic(
    chapter_code,
    fn,
    moved,
  );
  await file_delete(file_path);
  let r = {
    chapter_code,
    mended: befores.length,
    explains,
    absent_left: absent.length,
    handed_off,
  };
  return r;
}
