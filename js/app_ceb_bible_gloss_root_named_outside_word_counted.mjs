import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_named_outside_word_counted(
  sample_size,
) {
  "How many of the roots only the widened reader can see are not spelled anywhere inside the word they are given for, which is the mark of a quoted English meaning read as though it were a root.";
  "★ A SPACE CATCHES ONLY THE PHRASES AND THE ONE-WORD MEANINGS ARE THE LARGER HALF. Asking whether the answer holds a space found 101 of 26024, and every one of them was English of the shape to him. A meaning written as one word - God for Dios, this for niini - is spelled no differently from a root and no count of spaces will ever see it. What separates the two is that a root is normally spelled inside the word built from it and a meaning in another language is not.";
  "This is a mark and not a proof, in both directions. A root can change its spelling enough to fall outside its own word, and an English meaning can happen to sit inside a Cebuano one. So what comes back is a class to read rather than a fault list, which is why the sentences are printed beside the count.";
  "Only the sightings the strict reader cannot see are asked. Where the sentence writes the word root outright the person has said what they mean, and a wrong answer there is theirs rather than the reading is.";
  "Nothing is written and nothing is asked of the site.";
  "The walk this sits on reads the strict roots, and the widened reader is called here rather than there because the strict answer decides whether the widened one is wanted at all.";
  "$plain sample_size";
  "the count says how many sentences to print from each side. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let widened_total = 0;
  let inside = 0;
  let outside = 0;
  let outside_rows = [];
  let inside_rows = [];
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = property_get(found, "claimed");
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
    let held = gloss_root_named_word_spelled_in_is(word, first);
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
  await gloss_chapters_roots_claimed_entries_generic(fn, entry_read);
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
