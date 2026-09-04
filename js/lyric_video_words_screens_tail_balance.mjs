import { list_add_multiple } from "./list_add_multiple.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_words_screen_text } from "./lyric_video_words_screen_text.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { multiply } from "./multiply.mjs";
import { lyric_video_words_screens_split_even } from "./lyric_video_words_screens_split_even.mjs";
import { list_slice } from "./list_slice.mjs";
export function lyric_video_words_screens_tail_balance(
  bounds,
  words,
  marks,
  room,
) {
  "The screen bounds again, with the last two of them evened up when the last was left holding so little that it reads as a scrap rather than as a screen.";
  "★ ONLY THE LAST TWO ARE TOUCHED, BECAUSE ONLY THE LAST ONE IS EVER SHORT. Every screen before it was filled until its words ran out of room, so each is as full as the frame allows. The last one holds whatever was left over, and what is left over is chosen by nothing at all - it is a remainder. Measured on the third of Luke, that left one card reading fire on its own underneath a card of eleven lines.";
  "★ WHAT COUNTS AS TOO LITTLE IS READ OFF THE FRAME RATHER THAN PICKED. The shape being complained about is a screen filling less than half the room it is given while the screen above it is full, so the test is that twice what the last one draws still does not reach the height of the frame. Where the frame only holds a line or two that shape cannot arise, and nothing here moves - which is why the screens already recorded are unchanged by this.";
  "★ IT REFUSES RATHER THAN FORCES. Where no fold leaves both screens fitting, the bounds come back exactly as they were: a runt tail is worse to read than a full one and it is not wrong, and that is the right way round for something that only ever improves the look of a thing.";
  arguments_assert(arguments, 4);
  let count = list_size(bounds);
  if (less_than(count, 2)) {
    return bounds;
  }
  let last = bounds[subtract(count, 1)];
  let prev = bounds[subtract(count, 2)];
  let opened = prev[0];
  let closed = last[1];
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let text = lyric_video_words_screen_text(last[0], closed, words);
  let drawn = lyric_video_text_lines(text, pixels_across, font_size);
  let a = multiply(drawn, 2);
  let runt = less_than(a, lines_max);
  if (not(runt)) {
    return bounds;
  }
  let at = lyric_video_words_screens_split_even(
    opened,
    closed,
    words,
    marks,
    room,
  );
  if (equal(at, null)) {
    return bounds;
  }
  let index_b = subtract(count, 2);
  let kept = list_slice(bounds, 0, index_b);
  list_add_multiple(kept, [
    [opened, at],
    [at, closed],
  ]);
  return kept;
}
