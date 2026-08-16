import { list_any } from "./list_any.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
export function binisaya_affix_piece_plain_is(piece) {
  "Whether one piece of binisaya.com's construction shorthand is a plain prefix, suffix or infix - the three a reader can be told about without anybody having decoded the rest of the notation.";
  "The shorthand is undocumented, and most of it is these three: a piece ending in a dash is put before the root, a piece starting with a dash is put after it, and a piece marked with a caret goes inside it. What is left over is sound changes and doublings written in symbols nobody here has read yet, and the whole point of separating them is that the unread ones can be passed over in silence rather than guessed at.";
  "A piece carrying an arrow is refused whatever else it looks like, because an arrow is the mark of one letter turning into another and that is a change to the root rather than a piece added to it.";
  let changed = list_any(["<", ">"], function mark_read(mark) {
    let held = text_includes(piece, mark);
    return held;
  });
  if (changed) {
    return false;
  }
  let prefix = text_ends_with(piece, "-");
  let suffix = text_starts_with(piece, "-");
  let infix = text_starts_with(piece, "^");
  let plain = list_any([prefix, suffix, infix], function held_is(held) {
    return held;
  });
  let doubled = text_starts_with(piece, "x");
  let readable = not(doubled);
  let r = plain && readable;
  return r;
}
