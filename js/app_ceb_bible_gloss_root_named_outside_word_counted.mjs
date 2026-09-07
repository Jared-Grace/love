import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_named_outside_word_counted(
  sample_size,
) {
  "How many of the roots only the widened reader can see are not spelled anywhere inside the word they are given for, which is the mark of a quoted English meaning read as though it were a root.";
  "★ A SPACE CATCHES ONLY THE PHRASES AND THE ONE-WORD MEANINGS ARE THE LARGER HALF. Asking whether the answer holds a space found 101 of 26024, and every one of them was English of the shape to him. A meaning written as one word - God for Dios, this for niini - is spelled no differently from a root and no count of spaces will ever see it. What separates the two is that a root is normally spelled inside the word built from it and a meaning in another language is not.";
  "This is a mark and not a proof, in both directions. A root can change its spelling enough to fall outside its own word, and an English meaning can happen to sit inside a Cebuano one. So what comes back is a class to read rather than a fault list, which is why the sentences are printed beside the count.";
  "Only the sightings the strict reader cannot see are asked. Where the sentence writes the word root outright the person has said what they mean, and a wrong answer there is theirs rather than the reading is.";
  "Nothing is written and nothing is asked of the site.";
  "$plain sample_size";
  "the count says how many sentences to print from each side. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let widened_total = 0;
  let inside = 0;
  let outside = 0;
  let outside_rows = [];
  let inside_rows = [];
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let claimed = gloss_explain_roots_claimed(explain);
      let claimed_count = list_size(claimed);
      let b = equal(claimed_count, 0);
      let strict = not(b);
      if (strict) {
        return;
      }
      let named = gloss_explain_roots_named(explain);
      let count = list_size(named);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      widened_total = add(widened_total, 1);
      let first = list_get(named, 0);
      let word = property_get(entry, word_key);
      let word2 = text_lower_to(word);
      let word_folded = gloss_word_folded(word2);
      let word3 = text_lower_to(first);
      let root_folded = gloss_word_folded(word3);
      let held = text_includes(word_folded, root_folded);
      let row = {
        word: word,
        named_root: first,
        explain: explain,
      };
      if (held) {
        inside = add(inside, 1);
        list_add(inside_rows, row);
        return;
      }
      outside = add(outside, 1);
      list_add(outside_rows, row);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let count2 = Number(sample_size);
  let r = {
    widened_total: widened_total,
    inside: inside,
    outside: outside,
    outside_shown: list_take(outside_rows, count2),
    inside_shown: list_take(inside_rows, count2),
  };
  return r;
}
