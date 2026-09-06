import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { binisaya_affix_kind_prefix } from "./binisaya_affix_kind_prefix.mjs";
import { equal } from "./equal.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { text_combine } from "./text_combine.mjs";
import { binisaya_affix_kind_suffix } from "./binisaya_affix_kind_suffix.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_first } from "./text_first.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
export function binisaya_affix_piece_word_put(word, piece) {
  "One plain piece of binisaya.com's shorthand put onto a word: before it, after it, or inside it, as the piece's own mark says.";
  "The dash the site writes is the root's place beside the piece, so what is put on is the piece with that dash taken off - the mark says where, and the letters that are left are what is added.";
  "A piece written inside goes in after the word's first letter, which is where Cebuano puts its infixes and where the site's own examples put them: kaon with in inside is kinaon, sulat is sinulat.";
  let kind = binisaya_affix_piece_kind(piece);
  let prefix = binisaya_affix_kind_prefix();
  let before = equal(kind, prefix);
  if (before) {
    let front = text_suffix_without(piece, "-");
    let fronted = text_combine(front, word);
    return fronted;
  }
  let suffix = binisaya_affix_kind_suffix();
  let after = equal(kind, suffix);
  if (after) {
    let tail = text_prefix_without(piece, "-");
    let tailed = text_combine(word, tail);
    return tailed;
  }
  let letters = text_prefix_without(piece, "^");
  let head = text_first(word);
  let rest = text_slice_from(word, 1);
  let opened = text_combine_3(head, letters, rest);
  return opened;
}
