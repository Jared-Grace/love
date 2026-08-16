import { binisaya_affix_kind_infix } from "./binisaya_affix_kind_infix.mjs";
import { binisaya_affix_kind_prefix } from "./binisaya_affix_kind_prefix.mjs";
import { binisaya_affix_kind_suffix } from "./binisaya_affix_kind_suffix.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function binisaya_affix_piece_kind(piece) {
  "Which of the three a plain piece of binisaya.com's shorthand is - the dash it carries and which end of it the dash is on says so.";
  "A trailing dash is the site's way of writing the root's place after the piece, and a leading dash is the same mark on the other side. What is left over carries a caret instead, and that is the piece written inside the root.";
  "Only a piece already found plain belongs here, so the caret is not checked for - the leftover case is the infix by elimination rather than by its mark, and a piece carrying a mark nobody has read was refused before it got this far.";
  let before = text_ends_with(piece, "-");
  if (before) {
    let prefix = binisaya_affix_kind_prefix();
    return prefix;
  }
  let after = text_starts_with(piece, "-");
  if (after) {
    let suffix = binisaya_affix_kind_suffix();
    return suffix;
  }
  let r = binisaya_affix_kind_infix();
  return r;
}
