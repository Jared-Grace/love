import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { tally_number_add } from "./tally_number_add.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
export function app_ceb_bible_gloss_roots_claimed_vouching_corroborated_root_read(
  poetic,
  claims_rest,
  claims_poetry,
  witness_count,
  roots_by_class,
  witnesses,
  once_books,
  once_listed,
) {
  arguments_assert(arguments, 8);
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
  function root_read(row) {
    let root = property_get(row, "stated_root");
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
  return root_read;
}
