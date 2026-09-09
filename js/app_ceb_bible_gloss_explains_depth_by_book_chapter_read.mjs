import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { text_size } from "./text_size.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { gloss_explain_affixes_claimed } from "./gloss_explain_affixes_claimed.mjs";
import { each } from "./each.mjs";
export function app_ceb_bible_gloss_explains_depth_by_book_chapter_read(
  by_book,
  explain_key,
) {
  arguments_assert(arguments, 2);
  function entries_pass(entries) {
    return entries;
  }
  function book_row(book) {
    let held = property_get_or_null(by_book, book);
    let b = null_is(held);
    let there = not(b);
    if (there) {
      return held;
    }
    let made = {
      book: book,
      chapters: 0,
      entries: 0,
      explained: 0,
      explain_letters: 0,
      root_claims: 0,
      entries_naming_root: 0,
      affix_claims: 0,
      entries_naming_affix: 0,
    };
    property_set(by_book, book, made);
    return made;
  }
  function counted_add(row, key, more) {
    let was = property_get(row, key);
    let value = add(was, more);
    property_set(row, key, value);
  }
  async function chapter_read(chapter_code) {
    let book = ebible_chapter_code_to_book(chapter_code);
    let row = book_row(book);
    counted_add(row, "chapters", 1);
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      app_ceb_bible_gloss_generate,
      entries_pass,
    );
    function entry_read(entry) {
      counted_add(row, "entries", 1);
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      counted_add(row, "explained", 1);
      let size = text_size(explain);
      counted_add(row, "explain_letters", size);
      let roots = gloss_explain_roots_claimed(explain);
      let root_count = list_size(roots);
      counted_add(row, "root_claims", root_count);
      let named_root = greater_than(root_count, 0);
      if (named_root) {
        counted_add(row, "entries_naming_root", 1);
      }
      let affixes = gloss_explain_affixes_claimed(explain);
      let affix_count = list_size(affixes);
      counted_add(row, "affix_claims", affix_count);
      let named_affix = greater_than(affix_count, 0);
      if (named_affix) {
        counted_add(row, "entries_naming_affix", 1);
      }
    }
    each(entries, entry_read);
  }
  return chapter_read;
}
