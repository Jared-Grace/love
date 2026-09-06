import { binisaya_affix_piece_kind } from "./binisaya_affix_piece_kind.mjs";
import { binisaya_affix_kind_infix } from "./binisaya_affix_kind_infix.mjs";
import { equal } from "./equal.mjs";
import { binisaya_affix_kind_prefix } from "./binisaya_affix_kind_prefix.mjs";
export function binisaya_affix_piece_put_order(piece) {
  "When one plain piece of binisaya.com's shorthand is put onto the root, against the other pieces: what goes inside the root goes on first, then what goes before it, then what goes after it.";
  "The order is what makes a breakdown rebuild one particular word rather than several. A piece written inside the root belongs inside the root and nowhere else, so it has to go on while the root is still only the root - put on after a prefix, it would land inside the prefix instead, which is a word nobody spells.";
  "Before and after cannot reach each other at all, so their order between themselves is left as the site lists them.";
  "Only a piece already found plain belongs here: the kind it asks for is the answer to that same question.";
  let kind = binisaya_affix_piece_kind(piece);
  let infix = binisaya_affix_kind_infix();
  let inside = equal(kind, infix);
  if (inside) {
    let first = 0;
    return first;
  }
  let prefix = binisaya_affix_kind_prefix();
  let before = equal(kind, prefix);
  if (before) {
    let second = 1;
    return second;
  }
  let last = 2;
  return last;
}
