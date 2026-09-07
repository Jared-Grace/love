import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_roots_claimed_vouching_corroborated() {
  "Every root the Cebuano gloss store names, sorted by how many different dictionary words vouch for it, so that a vouching resting on one word alone is told apart from a vouching many words agree on.";
  "Vouching was read until now as a single yes. A word the dictionary names as some other word's root was taken as proved, because nothing the app asks for can put a word in that position and only the site could have written it. That much is still true and it is why the reading exists.";
  "What it misses is that the site does not look a word up before answering. It strips affixes off whatever it is handed and reports the residue, so it answered moises with the root isi and the affixes mo- and -s, and it answered aaron with the root aron and the prefix a-. Neither residue was ever a word anybody used. Both are now sitting in the vouched set, indistinguishable from sulti and buhat, because the store cannot tell a lexicon hit from a guess.";
  "Counting the witnesses tells them apart without anybody judging Cebuano. A root reached from forty-five different words is a place forty-five independent strippings converged on, and stripping noise does not converge. A root reached from exactly one word is that one stripping and nothing else, which is what isi is.";
  "The claims are split three ways on that count and each part is tallied twice over, once inside Psalms, Proverbs and Song and once through the other twenty-seven books, because the finding this was built to check is a clean bill of health for those twenty-seven and a permissive test would hand out exactly that.";
  "★ THIS RE-ASKS A QUESTION THAT WAS ALREADY ANSWERED YES. The earlier reading found every root claim outside the three poetic books vouched for, with no exceptions at all, and a perfect score is the shape a test too easy to fail also makes. Whatever comes back here is about the test and not about the store: if the clean books stay clean under the harder test the first answer stands, and if they do not then the first answer was measuring the dictionary's willingness to guess.";
  "★ ONE WITNESS IS NOT A FAULT. Most real roots are named by one word or by none, because most words were never taken apart. What is separated here is how much a vouching rests on, not whether a root is good, and the single-witness rows are listed with the word that vouched for them so that a reader can see the difference between kaon reached once and isi reached once.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let spellings = object_property_names(known);
  let witnesses = {};
  function witness_note(spelling) {
    let entry = property_get(known, spelling);
    let nothing = null_is(entry);
    if (nothing) {
      return;
    }
    let analysed = property_get_or_null(entry, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get_or_null(entry, "root");
    let unwritten = null_is(root);
    if (unwritten) {
      return;
    }
    let bare = gloss_word_bare(root);
    let blank = text_empty_is(bare);
    if (blank) {
      return;
    }
    let key = gloss_word_folded(bare);
    let held = property_get_or_null(witnesses, key);
    if (null_is(held)) {
      held = [];
      property_set(witnesses, key, held);
    }
    list_add(held, spelling);
  }
  each(spellings, witness_note);
  let named_roots = object_property_names(witnesses);
  let named_once = 0;
  let named_more = 0;
  function witness_count(key) {
    let held = property_get_or_null(witnesses, key);
    if (null_is(held)) {
      let r = 0;
      return r;
    }
    let once = list_unique(held);
    let size = list_size(once);
    return size;
  }
  function witness_tally(key) {
    let size = witness_count(key);
    let many = greater_than(size, 1);
    if (many) {
      named_more = add(named_more, 1);
      return;
    }
    named_once = add(named_once, 1);
  }
  each(named_roots, witness_tally);
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let chapters = property_get(gathered, "chapters");
  let roots_distinct = property_get(gathered, "roots_distinct");
  let by_root = property_get(gathered, "by_root");
  let roots = object_property_names(by_root);
  let poetic = ["PSA", "PRO", "SNG"];
  let roots_by_class = {};
  let claims_poetry = {};
  let claims_rest = {};
  let once_books = {};
  let once_listed = [];
  function claim_note(class_name, chapter_codes) {
    function chapter_note(code) {
      let book = ebible_chapter_code_to_book(code);
      let inside = list_includes(poetic, book);
      let where = claims_rest;
      if (inside) {
        where = claims_poetry;
      }
      tally_number_add(where, class_name, 1);
    }
    each(chapter_codes, chapter_note);
  }
  function root_read(root) {
    let row = property_get(by_root, root);
    let seen_in = property_get(row, "chapters");
    let key = gloss_word_folded(root);
    let size = witness_count(key);
    let class_name = "unvouched";
    let vouched = greater_than(size, 0);
    if (vouched) {
      class_name = "vouched_once";
      let many = greater_than(size, 1);
      if (many) {
        class_name = "vouched_corroborated";
      }
    }
    tally_number_add(roots_by_class, class_name, 1);
    claim_note(class_name, seen_in);
    let single = greater_than(size, 0);
    let plural = greater_than(size, 1);
    if (not(single)) {
      return;
    }
    if (plural) {
      return;
    }
    let held = property_get_or_null(witnesses, key);
    let vouching_words = list_unique(held);
    function books_note(code) {
      let book = ebible_chapter_code_to_book(code);
      tally_number_add(once_books, book, 1);
    }
    each(seen_in, books_note);
    let words = property_get(row, "words");
    let named = {
      stated_root: root,
      sightings: property_get(row, "sightings"),
      vouched_by: vouching_words,
      words: list_unique(words),
      chapters: seen_in,
      explain: property_get(row, "explain"),
    };
    list_add(once_listed, named);
  }
  each(roots, root_read);
  function sightings_of(named) {
    let n = property_get(named, "sightings");
    return n;
  }
  list_sort_number_mapper_reverse(once_listed, sightings_of);
  let answer = {};
  property_set(answer, "chapters", chapters);
  let dictionary_named = list_size(named_roots);
  property_set(answer, "dictionary_roots_named", dictionary_named);
  property_set(answer, "dictionary_roots_named_once", named_once);
  property_set(answer, "dictionary_roots_named_more", named_more);
  property_set(answer, "roots_claimed", roots_distinct);
  property_set(answer, "roots_by_class", roots_by_class);
  property_set(answer, "claims_poetry", claims_poetry);
  property_set(answer, "claims_rest", claims_rest);
  property_set(answer, "vouched_once_books", once_books);
  property_set(answer, "vouched_once_listed", once_listed);
  return answer;
}
