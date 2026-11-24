import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_eng_gloss_authored_get } from "./app_learn_eng_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
import { path_inside_folder_assert } from "./path_inside_folder_assert.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { app_learn_eng_gloss_passages_words } from "./app_learn_eng_gloss_passages_words.mjs";
import { error } from "./error.mjs";
import { gloss_write_chapter_file_path } from "./gloss_write_chapter_file_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_learn_eng_gloss_write_chapter_file } from "./app_learn_eng_gloss_write_chapter_file.mjs";
import { file_delete } from "./file_delete.mjs";
export async function app_learn_eng_gloss_write_chapter_lines(
  language_code,
  chapter_code,
) {
  "Save a whole chapter of English words explained in the reader's language from a plain text file holding only the meaning and the explanation of each word, one word to a line, with the English words themselves taken from the passage.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  "The file sits in a folder named lines inside the store's handover folder, called by the chapter code with .txt after it. A line starting with two hashes and a space names the passage by the verses it covers, the same key the JSON file uses; every other line that is not blank is one word: its meaning, a bar, then its explanation.";
  "★ THE WORD IS NEVER TYPED, SO IT CANNOT BE TYPED WRONG. The English word of each entry is read from the passage in order, which is the very list the alignment gate checks against, so an author only has to count lines. A passage whose line count differs from its word count is refused by name, with its words listed, before anything is stored.";
  "It is the JSON twin made shorter: it writes the JSON file the twin reads and hands over to it, so storing works exactly as it always has. Writing the word, the meaning and the explanation under their names for every entry was most of what an author typed, for nothing the store did not already know.";
  arguments_assert(arguments, 2);
  let store = app_learn_eng_gloss_authored_get(language_code);
  let fn = property_get(store, "generate");
  let folder_handover = gloss_write_folder(fn);
  let folder = path_join([folder_handover, "lines"]);
  let path = path_join([folder, chapter_code + ".txt"]);
  path_inside_folder_assert(folder, path);
  let lines = await file_read_lines(path);
  let passages = await app_learn_eng_gloss_passages_words(
    language_code,
    chapter_code,
  );
  let authored = {};
  let verse_key = null;
  let rows = null;
  let rows_of = {};
  for (let line_raw of lines) {
    let line = line_raw.trim();
    if (equal(line, "")) {
      continue;
    }
    if (line.startsWith("## ")) {
      verse_key = line.slice(3).trim();
      rows = [];
      rows_of[verse_key] = rows;
      continue;
    }
    if (equal(rows, null)) {
      error("a word line comes before any line naming its passage: " + line);
    }
    let bar = line.indexOf("|");
    if (less_than(bar, 0)) {
      error(
        "in " +
          verse_key +
          " a line has no bar between meaning and explanation: " +
          line,
      );
    }
    let gloss = line.slice(0, bar).trim();
    let explain = line.slice(bar + 1).trim();
    if (equal(gloss, "")) {
      error(
        "in " + verse_key + " a line has no meaning before its bar: " + line,
      );
    }
    rows.push({
      gloss,
      explain,
    });
  }
  let refused = [];
  for (let key of object_property_names(rows_of)) {
    let passage = null;
    for (let p of passages) {
      if (equal(p.verse_key, key)) {
        passage = p;
      }
    }
    if (equal(passage, null)) {
      refused.push({
        verse_key: key,
        reason: "no passage of the chapter covers these verses",
      });
      continue;
    }
    let words = passage.words;
    let found = rows_of[key];
    if (not_equal(found.length, words.length)) {
      refused.push({
        verse_key: key,
        words_size: words.length,
        lines_size: found.length,
        words,
      });
      continue;
    }
    let entries = [];
    for (let i = 0; less_than(i, words.length); i++) {
      entries.push({
        word: words[i],
        gloss: found[i].gloss,
        explain: found[i].explain,
      });
    }
    authored[key] = entries;
  }
  if (greater_than(refused.length, 0)) {
    let message = json_to(refused);
    error(message);
  }
  let path_json = gloss_write_chapter_file_path(chapter_code, fn);
  await file_overwrite_json(path_json, authored);
  let written = await app_learn_eng_gloss_write_chapter_file(
    language_code,
    chapter_code,
  );
  await file_delete(path);
  return written;
}
