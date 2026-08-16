import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function binisaya_affix_piece_phrase(piece) {
  "One plain piece of binisaya.com's construction shorthand, said in the words a reader with no grammar is meant to be given.";
  "The three words prefix, suffix and infix are the ones the explanations are already required to use correctly, and getting them wrong was the failure left standing after the roots were fixed - a chapter said the letters in of tinapay were a prefix ti- when they sit inside tapay. Saying which of the three each piece is, rather than handing over the mark that encodes it, is what removes the guess.";
  "Where the piece is placed is named in the same breath as what it is called, because a reader who does not know the word infix learns it from the phrase that follows it and does not have to be told twice.";
  "Only a piece already found plain belongs here. This does not check, because the checking is a question about a whole word rather than about one piece, and doing it twice would let the two answers differ.";
  let prefix = text_ends_with(piece, "-");
  if (prefix) {
    let before = text_combine_multiple([
      "the prefix ",
      piece,
      " before the root",
    ]);
    return before;
  }
  let suffix = text_starts_with(piece, "-");
  if (suffix) {
    let after = text_combine_multiple([
      "the suffix ",
      piece,
      " after the root",
    ]);
    return after;
  }
  let letters = text_skip(piece, 1);
  let r = text_combine_multiple([
    "the infix ",
    letters,
    " inside the root itself",
  ]);
  return r;
}
