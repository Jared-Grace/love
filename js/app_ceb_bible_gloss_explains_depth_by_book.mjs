import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { text_size } from "./text_size.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { gloss_explain_affixes_claimed } from "./gloss_explain_affixes_claimed.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { divide } from "./divide.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_explains_depth_by_book() {
  "How deeply the Cebuano gloss store explains a word, book by book: how many entries carry a sentence, how long that sentence runs, how often it names a root outright, and how often it names a piece of the word as a prefix, a suffix or an infix.";
  "It exists because two halves of one store were found writing in two registers, and a register is the kind of thing a reader sees in two samples and cannot then prove. Luke is told a word means a person; a psalm is told which part of speech a word is, what its prefix does and what its root means. The second is where every invented root sits, and depth is the one property of the two registers that can be counted rather than described.";
  "Depth is counted three ways because no one of them settles it. Length alone would call a long sentence deep when it is only wordy, a root claim alone would miss a breakdown that names pieces and stops short of a root, and an affix claim alone would miss the many sentences that name a root and no piece at all. Read together they say what shape a book's sentences are.";
  "Every book is reported and not only the ones that stand out, because a book with nothing remarkable in it is the comparison, and a reading that dropped it would be naming the same three books it was built to test.";
  "★ DEPTH IS NOT QUALITY AND THIS SAYS NOTHING ABOUT EITHER. A short sentence can be wrong and a long one can be right. What is here is how much each book's sentences undertake to say, which is a reason a fault would land in one book and not another, and never itself the fault.";
  arguments_assert(arguments, 0);
  let chapter_codes = await gloss_chapters_stored(app_ceb_bible_gloss_generate);
  let explain_key = gloss_entry_explain_key();
  let by_book = {};
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
  await each_async(chapter_codes, chapter_read);
  let books = object_property_names(by_book);
  let listed = [];
  function book_finish(book) {
    let row = property_get(by_book, book);
    let explained = property_get(row, "explained");
    let b2 = greater_than(explained, 0);
    let quiet = not(b2);
    if (quiet) {
      list_add(listed, row);
      return;
    }
    let letters = property_get(row, "explain_letters");
    let mean = divide(letters, explained);
    let value2 = number_round_places(mean, 1);
    property_set(row, "explain_letters_mean", value2);
    let naming_root = property_get(row, "entries_naming_root");
    let root_share = divide(naming_root, explained);
    let value3 = number_round_places(root_share, 3);
    property_set(row, "naming_root_share", value3);
    let naming_affix = property_get(row, "entries_naming_affix");
    let affix_share = divide(naming_affix, explained);
    let value4 = number_round_places(affix_share, 3);
    property_set(row, "naming_affix_share", value4);
    list_add(listed, row);
  }
  each(books, book_finish);
  function entries_of(row) {
    let n = property_get(row, "entries");
    return n;
  }
  list_sort_number_mapper_reverse(listed, entries_of);
  let answer = {};
  let value5 = list_size(chapter_codes);
  property_set(answer, "chapters", value5);
  let value6 = list_size(listed);
  property_set(answer, "books", value6);
  property_set(answer, "listed", listed);
  return answer;
}
