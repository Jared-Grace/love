import { app_emoji_bible_tradition_base } from "./app_emoji_bible_tradition_base.mjs";
import { app_emoji_bible_tradition_orthodox } from "./app_emoji_bible_tradition_orthodox.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function app_emoji_bible_tradition_other(name) {
  "$plain name";
  "The name of the way of drawing a reader on this one would move to, which is the other of the two.";
  "The button that offers the swap and the swap itself both had this worked out inside them, and the two had to agree exactly: the button promises a drawing and the swap delivers one, so a reader deciding whether to trust the page would meet a small lie the moment they disagreed. Asked in one place they cannot.";
  "Two drawings today, so the other one is the one that is not this one. On the day a third is drawn this becomes a step through a list, and that is the day to write one.";
  arguments_assert(arguments, 1);
  let plain = app_emoji_bible_tradition_base();
  let on_plain = equal(name, plain);
  let other = app_emoji_bible_tradition_base();
  if (on_plain) {
    other = app_emoji_bible_tradition_orthodox();
  }
  return other;
}
