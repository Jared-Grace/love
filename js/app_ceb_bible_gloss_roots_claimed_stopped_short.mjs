import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_set } from "./property_set.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short() {
  "Every root the Cebuano gloss store names that the dictionary has never vouched for, where a longer run of letters starting at the very same place in the very same word is one the dictionary has vouched for - so the sentence stopped short of a root that was already known, at the spot it was pointing at.";
  "This is the fault the relation readings cannot see. Asked how a claimed root stands to a dictionary root, an inside answer comes back deeper, and deeper is usually right: naming gugma under higugma tells a reader more than the dictionary does. Naming an under anyag is the same answer and the opposite thing, because an is not a shorter root, it is anyag with the end cut off.";
  "What tells the two apart without anybody judging Cebuano is that the dictionary itself has vouched for gugma and has never vouched for an. Vouching is the one thing in the stored dictionary that only the site could have written - a word named as some other word's root. So the reading asks nothing about morphology and only ever compares two answers the dictionary gave.";
  "Both halves have to hold. A claim the dictionary vouches for is passed over however short it is, and a claim it does not vouch for is passed over unless a longer run at the same place in the same word is vouched for. Neither half alone names anything: the first would name every root nobody has looked up, and the second would name every word built on a root.";
  "Every place the claimed root stands in the word is tried and not only the first, because a short run of letters lands in a word more than once and the occurrence that matters is not always the one at the front.";
  "The books are counted twice over, once for every root the dictionary is silent about and once for the ones named here, because a reading that lands in three books out of thirty says something about those books only if the pool it was drawn from did not. Read one tally without the other and where the store is thin reads as where the store is wrong.";
  "★ NOT VOUCHED IS NOT DISPROVED. The vouching map vouches and never refuses, so a root missing from it may be perfectly good Cebuano that nothing in the dictionary happens to be built from. What is named here is a claim the dictionary is silent about standing where a claim the dictionary speaks for would have fitted, which is a reason to look and not a verdict.";
  "★ THE LONGER RUN IS NOT THE REPAIR EITHER. It is one root the dictionary knows that the word holds at that place, and a word can hold more than one. The longest is named first because it is the one the letters were cut from, and the rest are named beside it so a reader can see what the choice was.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let vouched = binisaya_words_known_roots_named(known);
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let chapters = property_get(gathered, "chapters");
  let roots_distinct = property_get(gathered, "roots_distinct");
  let by_root = property_get(gathered, "by_root");
  let roots = object_property_names(by_root);
  let unvouched_roots = 0;
  let unvouched_books = {};
  let named_books = {};
  let listed = [];
  let sightings_named = 0;
  function vouched_is(spelling) {
    let folded = gloss_word_folded(spelling);
    let held = property_get_or_null(vouched, folded);
    let there = not(null_is(held));
    return there;
  }
  function books_tally(where, chapter_codes) {
    function chapter_note(code) {
      let book = ebible_chapter_code_to_book(code);
      tally_number_add(where, book, 1);
    }
    each(chapter_codes, chapter_note);
  }
  function root_read(root) {
    let row = property_get(by_root, root);
    let spoken_for = vouched_is(root);
    if (spoken_for) {
      return;
    }
    unvouched_roots = add(unvouched_roots, 1);
    let seen_in = property_get(row, "chapters");
    books_tally(unvouched_books, seen_in);
    let root_letters = text_size(root);
    let longer_known = [];
    let words = property_get(row, "words");
    let words_once = list_unique(words);
    function word_read(word) {
      let bare = gloss_word_bare(word);
      let word_letters = text_size(bare);
      let at = text_index_of_from_try(bare, root, 0);
      while (not(less_than(at, 0))) {
        let end = add(add(at, root_letters), 1);
        while (less_than_equal(end, word_letters)) {
          let longer = text_slice(bare, at, end);
          let takes = vouched_is(longer);
          if (takes) {
            list_add(longer_known, longer);
          }
          end = add(end, 1);
        }
        let next = add(at, 1);
        at = text_index_of_from_try(bare, root, next);
      }
    }
    each(words_once, word_read);
    let found = list_unique(longer_known);
    let any = greater_than(list_size(found), 0);
    if (not(any)) {
      return;
    }
    list_sort_number_mapper_reverse(found, text_size);
    let sightings = property_get(row, "sightings");
    sightings_named = add(sightings_named, sightings);
    books_tally(named_books, seen_in);
    let named = {
      stated_root: root,
      sightings: sightings,
      known_longer: found,
      words: words_once,
      chapters: seen_in,
      explain: property_get(row, "explain"),
    };
    list_add(listed, named);
  }
  each(roots, root_read);
  function sightings_of(named) {
    let n = property_get(named, "sightings");
    return n;
  }
  list_sort_number_mapper_reverse(listed, sightings_of);
  let answer = {};
  property_set(answer, "chapters", chapters);
  property_set(answer, "roots_distinct", roots_distinct);
  property_set(answer, "unvouched_roots", unvouched_roots);
  property_set(answer, "unvouched_books", unvouched_books);
  property_set(answer, "stopped_short_roots", list_size(listed));
  property_set(answer, "stopped_short_sightings", sightings_named);
  property_set(answer, "stopped_short_books", named_books);
  property_set(answer, "listed", listed);
  return answer;
}
