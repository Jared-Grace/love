import { property_null_is } from "./property_null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { not } from "./not.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_roots_claimed_stopped_short_books_tally() {
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let vouched = binisaya_words_known_roots_named(known);
  let unvouched_roots = 0;
  let claimed_books = {};
  let unvouched_books = {};
  let named_books = {};
  let listed = [];
  let sightings_named = 0;
  function vouched_is(spelling) {
    let folded = gloss_word_folded(spelling);
    let b = property_null_is(vouched, folded);
    let there = not(b);
    return there;
  }
  function books_tally(where, chapter_codes) {
    function chapter_note(code) {
      let book = ebible_chapter_code_to_book(code);
      tally_number_add(where, book, 1);
    }
    each(chapter_codes, chapter_note);
  }
  let r = {
    unvouched_roots,
    claimed_books,
    unvouched_books,
    named_books,
    listed,
    sightings_named,
    vouched_is,
    books_tally,
  };
  return r;
}
