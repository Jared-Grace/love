import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_named_entries_generic } from "./gloss_chapters_roots_named_entries_generic.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_named_spaced_counted(
  sample_size,
) {
  "How many of the roots the widened reader hands back are not roots at all but quoted English, counted apart for the wording that names one outright and the three that were added to it.";
  "★ THE WIDENING THAT FOUND THREE MORE WORDINGS ALSO LET IN A KIND OF ANSWER THE STRICT READER NEVER SAW, AND THIS IS WHAT THAT COST. A sentence of the shape word is X quotes X whether X is the root or the English meaning, so the pattern that reads the first also reads the second and hands back a phrase like to him as though it were Cebuano. The strict reader was safe from this only because it required the word root to be written first, and a person writing an English meaning does not write that word.";
  "A space is what is asked, and it is a floor rather than a test. Cebuano roots are single words, so an answer holding a space is certainly not one; but a one-word English meaning like God or this is not caught, so the count that comes back is the smallest the fault can be and not its size.";
  "The two sides are counted apart because they are not equally suspect and a single figure would hide that. The strict wording is quoted after the word root, which is a person saying outright what they mean; the three added wordings are inferred from the shape of the sentence, and the shape is what a meaning gloss also has.";
  "Nothing is written and nothing is asked of the site.";
  "This is the one reading that asks both readers of the same sentence, and the shared walk supplies the wide one because that is the side being priced. The narrow reader is called here rather than there, and only where the wide one already answered something, which is the order the counts depend on: an entry the wide reader is silent about is not in either total.";
  "$plain sample_size";
  "the count says how many spaced answers to print. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let named_total = 0;
  let strict_total = 0;
  let strict_spaced = 0;
  let widened_total = 0;
  let widened_spaced = 0;
  let rows = [];
  function entry_read(found) {
    let explain = property_get(found, "explain");
    let named = property_get(found, "named");
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
  await gloss_chapters_roots_named_entries_generic(fn, entry_read);
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
