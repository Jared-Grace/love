import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_words_screen_text } from "./lyric_video_words_screen_text.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { lyric_video_words_word_text } from "./lyric_video_words_word_text.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
export function lyric_video_words_screens_split_even(
  opened,
  closed,
  words,
  marks,
  room,
) {
  "Where to fold one run of words into two screens so the taller of the two comes out as short as it can, or nothing at all when no fold leaves both of them fitting.";
  "★ THIS ASKS A DIFFERENT QUESTION FROM THE FILLING, SO IT LOOKS IN DIFFERENT PLACES. Filling a screen walks forward until the words run out of room and then reaches a few words back for a pause, because everything before that point is already settled and only the very end of it is still open. Folding a run in two settles nothing in advance, so every word in the run is a candidate and every pause among them is worth having - which is why the reach back of four does not appear here.";
  "★ A PAUSE BEATS A BALANCE. Among the folds that leave a mark at the foot of the first screen, the best balanced one is taken; only when no such fold fits at all is an unmarked one used. A screen ending in the middle of a phrase is wrong to read however evenly it was filled, and that ordering is the same one the reaching back already makes.";
  "★ TIES GO TO THE LATER FOLD, SO THE FIRST SCREEN IS THE FULLER ONE. That is the way the rest of the reading runs - a screen fills from the top - and it keeps the pair looking like a screen and what spilled off it rather than like two halves of one thing.";
  arguments_assert(arguments, 5);
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let marked_at = null;
  let marked_tall = null;
  let any_at = null;
  let any_tall = null;
  let at = opened + 1;
  while (less_than(at, closed)) {
    let head = lyric_video_words_screen_text(opened, at, words);
    let tail = lyric_video_words_screen_text(at, closed, words);
    let before = lyric_video_text_lines(head, pixels_across, font_size);
    let after = lyric_video_text_lines(tail, pixels_across, font_size);
    let tall = before;
    if (greater_than(after, tall)) {
      tall = after;
    }
    let fits =
      less_than_equal(before, lines_max) && less_than_equal(after, lines_max);
    let order_word = subtract(at, 1);
    let ends = lyric_video_words_word_text(order_word, words);
    let marked = text_ends_with_any(ends, marks);
    let evener = equal(any_tall, null) || less_than_equal(tall, any_tall);
    if (fits && evener) {
      any_tall = tall;
      any_at = at;
    }
    let evener_marked =
      equal(marked_tall, null) || less_than_equal(tall, marked_tall);
    if (fits && marked && evener_marked) {
      marked_tall = tall;
      marked_at = at;
    }
    at = at + 1;
  }
  if (not_equal(marked_at, null)) {
    return marked_at;
  }
  return any_at;
}
