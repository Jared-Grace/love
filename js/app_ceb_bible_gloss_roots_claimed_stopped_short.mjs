import { app_ceb_bible_gloss_roots_claimed_stopped_short_books_tally } from "./app_ceb_bible_gloss_roots_claimed_stopped_short_books_tally.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { property_set } from "./property_set.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short() {
  "Every root the Cebuano gloss store names that the dictionary has never vouched for, where a longer run of letters starting at the very same place in the very same word is one the dictionary has vouched for - so the sentence stopped short of a root that was already known, at the spot it was pointing at.";
  "This is the fault the relation readings cannot see. Asked how a claimed root stands to a dictionary root, an inside answer comes back deeper, and deeper is usually right: naming gugma under higugma tells a reader more than the dictionary does. Naming an under anyag is the same answer and the opposite thing, because an is not a shorter root, it is anyag with the end cut off.";
  "What tells the two apart without anybody judging Cebuano is that the dictionary itself has vouched for gugma and has never vouched for an. Vouching is the one thing in the stored dictionary that only the site could have written - a word named as some other word's root. So the reading asks nothing about morphology and only ever compares two answers the dictionary gave.";
  "Both halves have to hold. A claim the dictionary vouches for is passed over however short it is, and a claim it does not vouch for is passed over unless a longer run at the same place in the same word is vouched for. Neither half alone names anything: the first would name every root nobody has looked up, and the second would name every word built on a root.";
  "Every place the claimed root stands in the word is tried and not only the first, because a short run of letters lands in a word more than once and the occurrence that matters is not always the one at the front.";
  "The books are counted three times over - once for every root claimed anywhere, once for the ones the dictionary is silent about, and once for the ones named here - because a reading landing in three books out of thirty says something about those books only if the two pools it was drawn from did not. A tally read on its own cannot tell where the store is wrong from where the store is thin, and the walk being narrower than anybody thought looks exactly like a clean bill of health for everything it missed.";
  "★ NOT VOUCHED IS NOT DISPROVED. The vouching map vouches and never refuses, so a root missing from it may be perfectly good Cebuano that nothing in the dictionary happens to be built from. What is named here is a claim the dictionary is silent about standing where a claim the dictionary speaks for would have fitted, which is a reason to look and not a verdict.";
  "★ THE LONGER RUN IS NOT THE REPAIR EITHER. It is one root the dictionary knows that the word holds at that place, and a word can hold more than one. The longest is named first because it is the one the letters were cut from, and the rest are named beside it so a reader can see what the choice was.";
  arguments_assert(arguments, 0);
  let r = await app_ceb_bible_gloss_roots_claimed_stopped_short_books_tally();
  let books_tally = property_get(r, "books_tally");
  let vouched_is = property_get(r, "vouched_is");
  let sightings_named = property_get(r, "sightings_named");
  let listed = property_get(r, "listed");
  let named_books = property_get(r, "named_books");
  let unvouched_books = property_get(r, "unvouched_books");
  let claimed_books = property_get(r, "claimed_books");
  let unvouched_roots = property_get(r, "unvouched_roots");
  function root_read(row) {
    let root = property_get(row, "stated_root");
    let seen_in = property_get(row, "chapters");
    books_tally(claimed_books, seen_in);
    let spoken_for = vouched_is(root);
    if (spoken_for) {
      return;
    }
    unvouched_roots = add(unvouched_roots, 1);
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
        let left = add(at, root_letters);
        let end = add(left, 1);
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
    let a = list_size(found);
    let any = greater_than(a, 0);
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
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  list_sort_number_mapper_reverse(listed, gloss_row_sightings);
  let answer = {};
  let value2 = property_get(gathered, "chapters");
  property_set(answer, "chapters", value2);
  let distinct = property_get(gathered, "roots_distinct");
  property_set(answer, "roots_distinct", distinct);
  property_set(answer, "claimed_books", claimed_books);
  property_set(answer, "unvouched_roots", unvouched_roots);
  property_set(answer, "unvouched_books", unvouched_books);
  let value = list_size(listed);
  property_set(answer, "stopped_short_roots", value);
  property_set(answer, "stopped_short_sightings", sightings_named);
  property_set(answer, "stopped_short_books", named_books);
  property_set(answer, "listed", listed);
  return answer;
}
