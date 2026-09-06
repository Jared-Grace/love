import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { list_filter } from "./list_filter.mjs";
import { binisaya_affix_piece_plain_is } from "./binisaya_affix_piece_plain_is.mjs";
import { binisaya_affix_piece_letters } from "./binisaya_affix_piece_letters.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_any } from "./list_any.mjs";
export function gloss_explain_affix_named_is(explain_lower, affixes) {
  "Whether an explanation spells out any piece of the word's construction that the dictionary's shorthand can be read plainly.";
  "A word's origin has two halves, the root it comes from and the pieces put on it, and a sentence naming either half is doing the work. So a sentence that never respells the root but says the word carries the tie -ng is not silence, and a reading that only ever looks for the root will call it silence every time. This is the other half, asked so it can be set aside.";
  "Only the pieces the shorthand can be read plainly are looked for. The rest of the notation is sound changes and doublings nobody here has decoded, and there is no run of letters to look for at all - so a word built that way cannot clear itself this way, and stays reported. That is the cautious direction: it leaves a sound explanation on a list rather than taking a faulty one off it.";
  "The letters are looked for as the reader is shown them, dash and all, because a prefix is written ka- in these explanations and hunting for the bare ka would match any word beginning with those two letters.";
  "The wording is taken already in small letters, because the caller has lowered it once to ask the root question and lowering it twice would be the same string made again for every sighting in the store.";
  "$plain explain_lower";
  "$plain affixes";
  "the first is an explanation's wording in small letters, the second one word's construction as the dictionary writes it. Neither names anything that runs.";
  let pieces = binisaya_affixes_pieces(affixes);
  let plain = list_filter(pieces, binisaya_affix_piece_plain_is);
  function piece_named_is(piece) {
    let letters = binisaya_affix_piece_letters(piece);
    let lower = text_lower_to(letters);
    let named = text_includes(explain_lower, lower);
    return named;
  }
  let r = list_any(plain, piece_named_is);
  return r;
}
