import { binisaya_affix_piece_phrase } from "./binisaya_affix_piece_phrase.mjs";
import { binisaya_affix_piece_plain_is } from "./binisaya_affix_piece_plain_is.mjs";
import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { list_all } from "./list_all.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma_space_and } from "./list_join_comma_space_and.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { text_empty } from "./text_empty.mjs";
export function binisaya_affixes_plain_phrase(affixes) {
  "How one word was built out of its root, said in plain words - or nothing at all, where the shorthand carries something nobody here has decoded.";
  "Nothing is the right answer far more often than a partial account is. About one word in seven carries a sound change or a doubling written in symbols whose meaning has not been established, and a sentence naming two of a word's three pieces reads as a complete account and is not. Saying nothing leaves the machine on the rule it is already under - say nothing about a construction you are not certain of - while a half account hands it a confident falsehood to build on.";
  "So one unreadable piece silences the whole word rather than being skipped over. That is the difference between this and a filter, and it is the whole reason the check is asked of the word instead of of each piece as it is written out.";
  let pieces = binisaya_affixes_pieces(affixes);
  let none = list_empty_is(pieces);
  if (none) {
    let nothing = text_empty();
    return nothing;
  }
  let every = list_all(pieces, binisaya_affix_piece_plain_is);
  if (not(every)) {
    let unread = text_empty();
    return unread;
  }
  let phrases = list_map(pieces, binisaya_affix_piece_phrase);
  let r = list_join_comma_space_and(phrases);
  return r;
}
