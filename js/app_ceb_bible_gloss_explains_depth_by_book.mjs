import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
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
  let chapter_read = app_ceb_bible_gloss_explains_depth_by_book_chapter_read(
    by_book,
    explain_key,
  );
  await each_async(chapter_codes, chapter_read);
  let books = object_property_names(by_book);
  let listed = [];
  function book_finish(book) {
    let row = property_get(by_book, book);
    let explained = property_get(row, "explained");
    let b = greater_than(explained, 0);
    let quiet = not(b);
    if (quiet) {
      list_add(listed, row);
      return;
    }
    let letters = property_get(row, "explain_letters");
    let mean = divide(letters, explained);
    let value = number_round_places(mean, 1);
    property_set(row, "explain_letters_mean", value);
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
