import { reply_choice } from "./reply_choice.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { reply_words } from "./reply_words.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_book_name_aliases } from "./ebible_book_name_aliases.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each_object_values } from "./each_object_values.mjs";
export function reply_bible_book() {
  "Any of the 66 books of the Bible, named the way a heading writes it: Philippians, 1 John, first John, 1st Samuel.";
  "★ THE NAMES COME FROM THE BOOK LIST THE BIBLE PAGES ALREADY SHOW, NOT A LIST TYPED HERE, so a book can never be heard by one name and shown by another.";
  "A NUMBERED BOOK TAKES 1, FIRST OR 1st, THE SAME THREE WAYS THE 1 John heading was already heard; Roman numerals are left out, because I is also the word I. A number past 3 never comes: no book of the Bible is a fourth.";
  "★ THE OTHER SPELLINGS ARE THE ONES PASSAGE LINES ARE READ WITH, so Song of Solomon, Song of Songs and Psalm are heard here exactly where a passage line hears them.";
  let first = reply_choice(["1", "first", "1st"]);
  let second = reply_choice(["2", "second", "2nd"]);
  let third = reply_choice(["3", "third", "3rd"]);
  let ordinals = [
    {
      number: "1",
      read: first,
    },
    {
      number: "2",
      read: second,
    },
    {
      number: "3",
      read: third,
    },
  ];
  let books = ebible_books_engbsb();
  function book_read(book) {
    let lowered = text_lower_to(book.text);
    let words = text_split_space(lowered);
    let number = list_first(words);
    let ordinal = list_find_property_get_or(
      ordinals,
      "number",
      number,
      "read",
      null,
    );
    if (null_is(ordinal)) {
      let plain = reply_words(lowered);
      return plain;
    }
    let rest = list_skip(words, 1);
    let sequence_fns = list_concat([ordinal], rest);
    let read = reply_sequence(sequence_fns);
    return read;
  }
  let named = list_map(books, book_read);
  let aliases = ebible_book_name_aliases();
  let spellings = [];
  function spellings_add(froms) {
    list_add_multiple(spellings, froms);
  }
  each_object_values(aliases, spellings_add);
  function spelling_read(spelling) {
    let lowered_spelling = text_lower_to(spelling);
    let read_spelling = reply_words(lowered_spelling);
    return read_spelling;
  }
  let extra = list_map(spellings, spelling_read);
  let all = list_concat(named, extra);
  let book = reply_choice(all);
  return book;
}
