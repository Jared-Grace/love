import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_named_spaced_counted(
  sample_size,
) {
  "How many of the roots the widened reader hands back are not roots at all but quoted English, counted apart for the wording that names one outright and the three that were added to it.";
  "★ THE WIDENING THAT FOUND THREE MORE WORDINGS ALSO LET IN A KIND OF ANSWER THE STRICT READER NEVER SAW, AND THIS IS WHAT THAT COST. A sentence of the shape word is X quotes X whether X is the root or the English meaning, so the pattern that reads the first also reads the second and hands back a phrase like to him as though it were Cebuano. The strict reader was safe from this only because it required the word root to be written first, and a person writing an English meaning does not write that word.";
  "A space is what is asked, and it is a floor rather than a test. Cebuano roots are single words, so an answer holding a space is certainly not one; but a one-word English meaning like God or this is not caught, so the count that comes back is the smallest the fault can be and not its size.";
  "The two sides are counted apart because they are not equally suspect and a single figure would hide that. The strict wording is quoted after the word root, which is a person saying outright what they mean; the three added wordings are inferred from the shape of the sentence, and the shape is what a meaning gloss also has.";
  "Nothing is written and nothing is asked of the site.";
  "$plain sample_size";
  "the count says how many spaced answers to print. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let named_total = 0;
  let strict_total = 0;
  let strict_spaced = 0;
  let widened_total = 0;
  let widened_spaced = 0;
  let rows = [];
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
      let named = gloss_explain_roots_named(explain);
      let count = list_size(named);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      named_total = add(named_total, 1);
      let first = list_get(named, 0);
      let spaced = text_includes(first, " ");
      let claimed = gloss_explain_roots_claimed(explain);
      let claimed_count = list_size(claimed);
      let b = equal(claimed_count, 0);
      let strict = not(b);
      if (strict) {
        strict_total = add(strict_total, 1);
        if (spaced) {
          strict_spaced = add(strict_spaced, 1);
        }
        return;
      }
      widened_total = add(widened_total, 1);
      if (not(spaced)) {
        return;
      }
      widened_spaced = add(widened_spaced, 1);
      let row = {
        named_root: first,
        explain: explain,
      };
      list_add(rows, row);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let count2 = Number(sample_size);
  let shown = list_take(rows, count2);
  let r = {
    named_total: named_total,
    strict_total: strict_total,
    strict_spaced: strict_spaced,
    widened_total: widened_total,
    widened_spaced: widened_spaced,
    shown: shown,
  };
  return r;
}
