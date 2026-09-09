import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { app_ceb_bible_gloss_vocabularies } from "./app_ceb_bible_gloss_vocabularies.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_explain_roots_self_named } from "./gloss_explain_roots_self_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
import { gloss_vocabularies_word_met_is } from "./gloss_vocabularies_word_met_is.mjs";
import { gloss_chapters_entries_explained_generic } from "./gloss_chapters_entries_explained_generic.mjs";
import { gloss_rows_ranked } from "./gloss_rows_ranked.mjs";
export async function app_ceb_bible_gloss_root_self_named_apart_vocabulary_counted() {
  "The sightings of the ambiguous wording whose named root is not spelled inside its word, split again by whether the language has ever heard of that root, which is the test for whether a filter would cost anything.";
  "★ THE SPELLING MARK ALONE IS A TRADE AND THIS ASKS WHETHER THE TRADE CAN BE AVOIDED. Reading all 43 roots it flags: 19 of them are English pronouns and account for 764 sightings, and the other 24 are real Cebuano roots whose spelling shifted - dala under dad-on, dumdom under nahinumdom - and account for 35. Filtering on spelling alone would therefore buy 764 corrections at a cost of 35 losses, which is a judgment somebody has to make rather than a fault to fix.";
  "Adding the vocabularies is what could make it cost nothing, because the two sides differ in a second way. A shifted root is an ordinary word of the language and stands somewhere in the bible or in the dictionary; an English pronoun stands in neither. So the question worth an answer is how many of the 35 the vocabularies rescue and how many of the 764 they let through.";
  "Whether the answer licenses a filter is not settled here, and it could not be. A reader given only the sentence cannot ask a vocabulary at all - the bible and the dictionary are read off the disk - so acting on this needs a different reader that is handed the word, and building one is a choice about shape rather than a correction.";
  "Nothing is written and nothing is asked of the site.";
  "The walk this sits on hands over explained entries and nothing else, which is the right one of the three: the reader asked here is the one for this single wording, and neither of the two walks that read roots asks it. The two vocabularies are read before the walk starts, because the test inside it cannot ask a vocabulary that has not arrived.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let vocabularies = await app_ceb_bible_gloss_vocabularies();
  let outside = 0;
  let outside_unknown = 0;
  let outside_known = 0;
  let by_root_unknown = {};
  let by_root_known = {};
  function root_note(holder, root, word) {
    let row = property_get_or_null(holder, root);
    let fresh = null_is(row);
    if (fresh) {
      let made = {
        named_root: root,
        sightings: 0,
        words: [],
      };
      property_set(holder, root, made);
      row = made;
    }
    let seen = property_get(row, "sightings");
    let value = add(seen, 1);
    property_set(row, "sightings", value);
    let words = property_get(row, "words");
    list_add_if_not_includes(words, word);
  }
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let named = gloss_explain_roots_self_named(explain);
    let count = list_size(named);
    let empty = equal(count, 0);
    if (empty) {
      return;
    }
    let first = list_get(named, 0);
    let root = text_lower_to(first);
    let s = property_get(entry, word_key);
    let word = text_lower_to(s);
    let held = gloss_root_named_word_spelled_in_is(word, root);
    if (held) {
      return;
    }
    outside = add(outside, 1);
    let met = gloss_vocabularies_word_met_is(vocabularies, root);
    if (met) {
      outside_known = add(outside_known, 1);
      root_note(by_root_known, root, word);
      return;
    }
    outside_unknown = add(outside_unknown, 1);
    root_note(by_root_unknown, root, word);
  }
  await gloss_chapters_entries_explained_generic(fn, entry_read);
  let unknown_listed = gloss_rows_ranked(by_root_unknown);
  let known_listed = gloss_rows_ranked(by_root_known);
  let r = {
    outside: outside,
    outside_unknown: outside_unknown,
    outside_known: outside_known,
    unknown_rows: unknown_listed,
    known_rows: known_listed,
  };
  return r;
}
