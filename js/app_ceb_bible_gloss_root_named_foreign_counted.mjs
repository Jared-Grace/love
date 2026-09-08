import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { set_includes } from "./set_includes.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { gloss_rows_ranked } from "./gloss_rows_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_named_foreign_counted(
  sample_size,
) {
  "Every root only the widened reader can see that is neither a word the Cebuano bible writes nor a word the dictionary on this disk has heard of, gathered by the root so one habit of writing shows as one row.";
  "★ THIS IS THE HALF OF THE WIDENING'S FAULT A SPACE CANNOT REACH. Filtering out an answer holding a space took away 101 sightings and every one of them was an English phrase like to him. What it could not take away is a meaning written as one English word - Kaniya is him, Niini is this - which is spelled no differently from a root. Fifty-two of those were still standing in one 5442-sighting window after the space filter, so the class is measured from both ends rather than feared.";
  "Two vocabularies are asked and a root has to be missing from both. The bible's own words are asked first because a root that is a word of the language will normally stand somewhere in sixty-six books; the dictionary is asked second because a bound root need never stand alone and would be wrongly accused by the first test on its own. An English pronoun is in neither.";
  "This is a class to read and not a fault list, and one thing in particular will be in it wrongly. A root that is bound, rare, and never looked up is missing from both vocabularies while being perfectly sound, so the rows have to be read rather than acted on. That is why nothing is filtered here and why the sightings are carried beside each root. Measured on 2026-09-07: 3541 sightings over 522 roots, and the top fifteen roots read one by one are 604 sightings of English pronouns against 1006 of genuine bound roots like harian under gingharian, tapay under tinapay and ama under amahan. So the test finds the fault and does not isolate it, and roughly two in three of what it names is sound.";
  "Nothing is written and nothing is asked of the site.";
  "The walk this sits on is the one that reads the strict roots, and the widened reader is still called here rather than there. That is the order the work was already done in: the strict answer decides whether the widened one is wanted at all, so asking a walk to compute both would ask the widened question of every entry in the store to throw most of the answers away.";
  "The two vocabularies are read before the walk starts, because the test inside the walk cannot ask a vocabulary that has not arrived.";
  "$plain sample_size";
  "the count says how many roots to print. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let bible_folder = ebible_folder_cebuano();
  let apart = await bible_words_names_apart(bible_folder);
  let common = property_get(apart, "common");
  let vocabulary = list_unique_set(common);
  let known = await binisaya_words_known();
  let widened_total = 0;
  let foreign_sightings = 0;
  let by_root = {};
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
    let root = text_lower_to(first);
    let written = set_includes(vocabulary, root);
    if (written) {
      return;
    }
    let held = binisaya_words_known_get(known, root);
    let b2 = null_is(held);
    let looked_up = not(b2);
    if (looked_up) {
      return;
    }
    foreign_sightings = add(foreign_sightings, 1);
    let row = property_get_or_null(by_root, root);
    let fresh = null_is(row);
    if (fresh) {
      let made = {
        named_root: root,
        sightings: 0,
        words: [],
        explain: explain,
      };
      property_set(by_root, root, made);
      row = made;
    }
    let seen = property_get(row, "sightings");
    let value = add(seen, 1);
    property_set(row, "sightings", value);
    let word = property_get(entry, word_key);
    let words = property_initialize_list(row, "words");
    let item = text_lower_to(word);
    list_add_if_not_includes(words, item);
  }
  await gloss_chapters_roots_claimed_entries_generic(fn, entry_read);
  let listed = gloss_rows_ranked(by_root);
  let count2 = Number(sample_size);
  let shown = list_take(listed, count2);
  let r = {
    widened_total: widened_total,
    foreign_sightings: foreign_sightings,
    foreign_roots: list_size(listed),
    shown: shown,
  };
  return r;
}
