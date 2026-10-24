import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_get } from "./list_get.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_entry_word_set(
  chapter_code,
  fn,
  verses,
  at,
  word,
) {
  "Spell the word one explanation in an authored gloss chapter stands under the way it is given, leaving what the explanation says untouched, and answer with the spelling it had before.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN23, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain verses";
  "the verses are a passage's verse numbers joined by commas, the way the chapter itself names its passages. They name a place and nothing that runs.";
  "$plain word";
  "the word is the spelling to write, ordinary text shown to a reader.";
  "A word can be spelled two ways that read alike and are not the same text - an apostrophe straight in one chapter and curled in every other. Each spelling then wants its own recording, and two words wanting one recording name is a reader tapping one and hearing the other. Met on 2026-10-24: one God's in GEN23 against curled ones in forty-seven chapters. Only the word is written here, so mending it never means typing the explanation out again.";
  arguments_assert(arguments, 5);
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  function passage_is(candidate) {
    let joined = property_list_join_comma(candidate, "verse_numbers");
    let eq = equal(joined, verses);
    return eq;
  }
  let passage = list_find(passages, passage_is);
  let entries = gloss_passage_entries(passage);
  let entry = list_get(entries, at);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let before = property_get(entry, word_key);
  property_set(entry, word_key, word);
  let value = json_format_to(entries);
  property_set(passage, "generated", value);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    verses,
    at,
    before,
    word,
  };
  return r;
}
