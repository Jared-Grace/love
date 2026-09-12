import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_chapter_verses } from "./bible_chapter_verses.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_passage_text_first } from "./gloss_passage_text_first.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { equal } from "./equal.mjs";
import { each_async } from "./each_async.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_passages_reworded_generic(fn, bible_folder) {
  "$plain bible_folder";
  "Every passage one gloss store explains whose wording is no longer the wording the bible now gives for the verses it names.";
  "★ AN EXPLANATION IS WRITTEN AGAINST A WORDING, AND THE WORDING CAN BE REPLACED UNDER IT WITHOUT ANYTHING SAYING SO. A gloss store keeps the verse it was authored from beside the words it explains. The reader does not read that copy; it reads the bible. So when the translation is reprinted, the store keeps explaining words the reader will not see and stays silent about words the reader will, and both halves of that fail by saying nothing at all.";
  "The store's own copy of the verse is what makes this answerable. A word list cannot answer it, because a word dropped from one verse is usually still written somewhere else in the bible and so looks present; the verse is the smallest thing whose wording is a fact about one passage.";
  "The verses are asked for the way the reader asks for them, out of the bible the app reads, rather than out of whichever printing happens to sit on this disk. A check that reads a different copy from the one that ships answers about a page nobody is looking at.";
  "Both sides are handed back whole for every passage that parted, because what to do about a reworded verse - re-author the explanations, or leave them - is a judgment, and the two wordings are what the judgment is made on.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let seen = [];
  let reworded = [];
  async function chapter_each(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    let verses = await bible_chapter_verses(bible_folder, chapter_code);
    let by_number = {};
    function verse_each(verse) {
      let verse_number = property_get(verse, "verse_number");
      let text = property_get(verse, "text");
      property_set(by_number, verse_number, text);
    }
    each(verses, verse_each);
    function passage_each(passage) {
      list_add(seen, chapter_code);
      let authored = gloss_passage_text_first(passage);
      let verse_numbers = property_get(passage, "verse_numbers");
      function number_text(verse_number) {
        let text = property_get_or_null(by_number, verse_number);
        let absent = null_is(text);
        if (absent) {
          let r2 = "";
          return r2;
        }
        return text;
      }
      let lines = list_map(verse_numbers, number_text);
      let now = list_join_space(lines);
      let same = equal(authored, now);
      if (same) {
        return;
      }
      let row = {
        chapter_code: chapter_code,
        verse_numbers: verse_numbers,
        authored: authored,
        now: now,
      };
      list_add(reworded, row);
    }
    each(passages, passage_each);
  }
  await each_async(chapter_codes, chapter_each);
  function row_chapter_code(row) {
    let chapter_code = property_get(row, "chapter_code");
    return chapter_code;
  }
  let codes = list_map(reworded, row_chapter_code);
  let codes_once = list_unique_sorted(codes);
  let r = {
    chapters: list_size(chapter_codes),
    passages: list_size(seen),
    reworded: list_size(reworded),
    chapters_reworded: list_size(codes_once),
    codes: codes_once,
    rows: reworded,
  };
  return r;
}
