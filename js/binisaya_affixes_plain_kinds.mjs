import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { binisaya_affix_piece_plain_is } from "./binisaya_affix_piece_plain_is.mjs";
import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { list_all } from "./list_all.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
export function binisaya_affixes_plain_kinds(affixes) {
  "Which kinds of piece one word is built with - or nothing at all, where the shorthand carries something nobody here has decoded.";
  "The same word that is not told how a word was built is not graded on how it said the word was built. A piece written as a sound change is not one of the three names, so any of the three found in prose about such a word would be a name the reader chose freely rather than one they were given, and calling that wrong would be grading them against an instruction nobody gave them.";
  "So an unreadable piece empties the whole word here, exactly as it silences the whole word in the sentence. The two are the same rule read from the two ends, which is why they are asked of the word and not of each piece.";
  let pieces = binisaya_affixes_pieces(affixes);
  let every = list_all(pieces, binisaya_affix_piece_plain_is);
  if (not(every)) {
    let unread = [];
    return unread;
  }
  let r = list_map(pieces, binisaya_affix_piece_kind);
  return r;
}
