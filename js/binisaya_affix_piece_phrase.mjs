import { binisaya_affix_kind_place } from "./binisaya_affix_kind_place.mjs";
import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { binisaya_affix_piece_letters } from "./binisaya_affix_piece_letters.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function binisaya_affix_piece_phrase(piece) {
  "One plain piece of binisaya.com's construction shorthand, said in the words a reader with no grammar is meant to be given.";
  "The three words prefix, suffix and infix are the ones the explanations are already required to use correctly, and getting them wrong was the failure left standing after the roots were fixed - a chapter said the letters in of tinapay were a prefix ti- when they sit inside tapay. Saying which of the three each piece is, rather than handing over the mark that encodes it, is what removes the guess.";
  "Where the piece is placed is named in the same breath as what it is called, because a reader who does not know the word infix learns it from the phrase that follows it and does not have to be told twice.";
  "Only a piece already found plain belongs here. This does not check, because the checking is a question about a whole word rather than about one piece, and doing it twice would let the two answers differ.";
  "Which of the three the piece is, is asked rather than decided here, because the same question is asked again of the answer that came back - a measure reads the explanation and looks for the name of the kind the dictionary gives. The sentence and the measure have to be reading one answer or the measure grades the sentence against a rule the sentence never followed.";
  let kind = binisaya_affix_piece_kind(piece);
  let letters = binisaya_affix_piece_letters(piece);
  let place = binisaya_affix_kind_place(kind);
  let r = text_combine_multiple(["the ", kind, " ", letters, place]);
  return r;
}
