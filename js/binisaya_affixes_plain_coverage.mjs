import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { equal } from "./equal.mjs";
import { binisaya_affix_piece_plain_is } from "./binisaya_affix_piece_plain_is.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { each } from "./each.mjs";
import { list_all } from "./list_all.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
export async function binisaya_affixes_plain_coverage() {
  "How many of the words binisaya.com has taken apart could have their construction described using only the part of its shorthand that is plainly readable, and how many carry something nobody here has decoded.";
  "This is the number that says what telling a reader how a word is built would cost. If nearly every word is plain prefixes and suffixes, the shorthand can be passed on today and the small remainder passed over in silence; if half of it carries sound changes, then decoding the notation is the work and it has to be done before anything is sent.";
  "A word counts as plain only when every piece of it is plain. One unreadable piece in the middle makes the whole construction unsafe to describe, because a description that names two of three pieces reads as complete and is not - and half an account of where a word came from is the failure this was all started over.";
  let known = await binisaya_words_known();
  let held = object_values(known);
  let analysed = 0;
  let plain = 0;
  function word_read(entry) {
    let taken_apart = property_get(entry, "analysed");
    if (not(taken_apart)) {
      return;
    }
    analysed = analysed + 1;
    let affixes = property_get(entry, "affixes");
    let pieces = binisaya_affixes_pieces(affixes);
    let none = list_size(pieces);
    if (equal(none, 0)) {
      return;
    }
    let every = list_all(pieces, binisaya_affix_piece_plain_is);
    if (not(every)) {
      return;
    }
    plain = plain + 1;
  }
  each(held, word_read);
  let r = {
    analysed,
    plain,
  };
  return r;
}
