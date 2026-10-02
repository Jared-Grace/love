import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_named_entries_generic } from "./gloss_chapters_roots_named_entries_generic.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_words_roots_named_apart() {
  "Every Cebuano word the gloss store takes back to one root in one place and to a different root in another, read in all four of the wordings an explanation can name a root in, worst first.";
  "★ IT IS THE WIDE-READING TWIN OF A READING THAT WENT BLIND WHEN THE STORE WAS REWORDED. The reading the gate sits on asks the narrow reader, which matches the word root followed by a quoted word and nothing else. On the second of October a pass rewrote nine hundred and sixty seven of the store's nine hundred and seventy nine chapters into comes from kalooy and binisaya.com takes it back to kalooy, and every one of its thirty six recorded words went stale without being mended - maluluy-on is still taken back to kalooy, to looy and to luoy in three chapters, and the narrow reader sees one of the three. The store did not get better; the question stopped reaching it.";
  "Nothing is asked of binisaya.com and nothing is written. One word does not come from two unrelated roots, so where the store explains a word two ways it has written something wrong somewhere, and that is settled from the disk alone.";
  "The first root an explanation names is the one taken, which is the same choice the narrow reading makes, and the reason is that the wide reader answers with whichever wording it found first and a sentence naming two roots is naming one root and one thing the root is not.";
  "Both sides are folded, the word and the root alike, so panulundon and panulondon are one word and tulond and tulund are one claim. Without that the biggest disagreements split into singletons and vanish.";
  "The word a row is named by is the first of its spellings in alphabetical order, and never the folded key, which is often not a word anybody writes. Alphabetical rather than first-seen because a record keyed on whichever spelling the walk met first would move whenever the walk order moved, and a record that changes on its own is a record of nothing.";
  "Not every row is a fault. One root can stand behind another, so a word explained as tarong and as matarong may be explained rightly twice at two depths, and which of those a row is is a person's reading rather than a rule's.";
  "How many chapters were walked and how many entries were met come back beside the rows, because finding none and reaching none are the same answer otherwise.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let by_word = {};
  let sightings_rooted = 0;
  function entry_read(row) {
    let named = property_get(row, "named");
    let none = list_size_equal(named, 0);
    if (none) {
      return;
    }
    let entry = property_get(row, "entry");
    let chapter_code = property_get(row, "chapter_code");
    let word = property_get(entry, word_key);
    let root = list_get(named, 0);
    let word_folded = gloss_word_folded(word);
    let root_folded = gloss_word_folded(root);
    sightings_rooted = add(sightings_rooted, 1);
    let held = property_get_or_null(by_word, word_folded);
    let word_first = null_is(held);
    let group = word_first
      ? {
          spellings: [],
          claims: {},
        }
      : held;
    property_set(by_word, word_folded, group);
    let spellings = property_get(group, "spellings");
    let spelt = list_includes(spellings, word);
    if (not(spelt)) {
      list_add(spellings, word);
    }
    let claims = property_get(group, "claims");
    let claim_held = property_get_or_null(claims, root_folded);
    let claim_first = null_is(claim_held);
    let claim = claim_first
      ? {
          root: root,
          chapters: [],
          sightings: 0,
        }
      : claim_held;
    property_set(claims, root_folded, claim);
    let seen = property_get(claim, "sightings");
    let value = add(seen, 1);
    property_set(claim, "sightings", value);
    let chapters_claimed = property_get(claim, "chapters");
    let chaptered = list_includes(chapters_claimed, chapter_code);
    if (not(chaptered)) {
      list_add(chapters_claimed, chapter_code);
    }
  }
  let walked = await gloss_chapters_roots_named_entries_generic(fn, entry_read);
  let keys = object_property_names(by_word);
  let apart = [];
  function key_read(key) {
    let group = property_get(by_word, key);
    let claims = property_get(group, "claims");
    let roots = object_property_names(claims);
    let alone = list_size_equal(roots, 1);
    if (alone) {
      return;
    }
    let spellings = property_get(group, "spellings");
    let spelt_sorted = list_sort_text(spellings);
    let word = list_get(spelt_sorted, 0);
    let rows = [];
    let sightings = 0;
    function root_read(root_folded) {
      let claim = property_get(claims, root_folded);
      let seen = property_get(claim, "sightings");
      sightings = add(sightings, seen);
      list_add(rows, claim);
    }
    each(roots, root_read);
    let found = {
      word: word,
      spellings: spelt_sorted,
      claims: list_size(roots),
      sightings: sightings,
      roots: rows,
    };
    list_add(apart, found);
  }
  each(keys, key_read);
  function found_sightings(found) {
    let sightings = property_get(found, "sightings");
    return sightings;
  }
  let ranked = list_sort_number_mapper_reverse(apart, found_sightings);
  let r = {
    chapters: property_get(walked, "chapters"),
    entries_seen: property_get(walked, "entries_seen"),
    sightings_rooted: sightings_rooted,
    words_rooted: list_size(keys),
    words_apart: list_size(ranked),
    apart: ranked,
  };
  return r;
}
