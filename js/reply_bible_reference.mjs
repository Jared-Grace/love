import { reply_optional } from "./reply_optional.mjs";
import { reply_bible_book } from "./reply_bible_book.mjs";
import { digits } from "./digits.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_bible_reference() {
  "Where a passage is said to be, the way it is written in front of the passage: the first John verses 7 through 10, 1 John 4:7, Philippians 4:6-7.";
  "★ THE NUMBERS ARE ANY RUN OF DIGITS AND JOINING WORDS, NOT THE ONE PASSAGE EACH VERSE IS IN. A message is read a letter at a time, so 4:6-7 arrives as the digits 4, 6 and 7, and 10 as 1 and 0; how many digits a run has is then just how many come, which reaches every verse of the longest chapter without counting. Which passage it names is not checked against the verse that follows, because the reply quotes the verse it read, not the heading it was given.";
  "ANY BOOK OF THE BIBLE, so a new verse rule is heard after its heading with nothing added here. A heading alone is still never answered.";
  let the = reply_optional("the");
  let book = reply_bible_book();
  let choices = digits();
  let digit = reply_choice(choices);
  let piece = reply_choice([
    digit,
    "chapter",
    "verse",
    "verses",
    "through",
    "to",
  ]);
  let numbers = reply_once_or_more(piece);
  let reference = reply_sequence([the, book, numbers]);
  return reference;
}
