import { reply_choice } from "./reply_choice.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { equal } from "./equal.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { list_concat } from "./list_concat.mjs";
import { reply_words } from "./reply_words.mjs";
import { list_map } from "./list_map.mjs";
export function reply_bible_book() {
  "Any of the 66 books of the Bible, named the way a heading writes it: Philippians, 1 John, first John, 1st Samuel.";
  "★ THE NAMES COME FROM THE BOOK LIST THE BIBLE PAGES ALREADY SHOW, NOT A LIST TYPED HERE, so a book can never be heard by one name and shown by another.";
  "A NUMBERED BOOK TAKES 1, FIRST OR 1st, THE SAME THREE WAYS THE 1 John heading was already heard; Roman numerals are left out, because I is also the word I.";
  "THAT LIST PRINTS THE SONG OF SONGS AS SONG, which nobody writes alone, so its two whole names are added, and Psalm, which is how one psalm is named.";
  let first = reply_choice(["1", "first", "1st"]);
  let second = reply_choice(["2", "second", "2nd"]);
  let third = reply_choice(["3", "third", "3rd"]);
  let books = ebible_books_engbsb();
  function book_read(book) {
    let lowered = text_lower_to(book.text);
    let words = text_split_space(lowered);
    let number = list_first(words);
    let rest = list_skip(words, 1);
    ("a number past 3 never comes: no book of the Bible is a fourth.");
    if (equal(number, "1")) {
      let sequence_fns = list_concat([first], rest);
      let read = reply_sequence(sequence_fns);
      return read;
    }
    if (equal(number, "2")) {
      let sequence_fns2 = list_concat([second], rest);
      let read2 = reply_sequence(sequence_fns2);
      return read2;
    }
    if (equal(number, "3")) {
      let sequence_fns3 = list_concat([third], rest);
      let read3 = reply_sequence(sequence_fns3);
      return read3;
    }
    let plain = reply_words(lowered);
    return plain;
  }
  let named = list_map(books, book_read);
  let r = reply_words("song of songs");
  let r2 = reply_words("song of solomon");
  let song = reply_choice([r, r2]);
  let extra = [song, "psalm"];
  let all = list_concat(named, extra);
  let book = reply_choice(all);
  return book;
}
