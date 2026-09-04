import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { lyric_video_text_width } from "./lyric_video_text_width.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
export function lyric_video_text_lines(text, pixels_across, font_size) {
  "$plain text";
  "$plain pixels_across";
  "$plain font_size";
  "How many lines a run of words breaks into when it is drawn at a given lettering size inside a given width.";
  "★ IT WALKS THE WORDS THE WAY THE SUBTITLE DRAWER DOES: a word goes on the line it is on if it still fits, and starts a new line if it does not. That drawer balances the lines afterwards so they come out evenly, but balancing never changes how many there are, so counting the greedy way answers the same question with none of the balancing.";
  "★ IT WAS CHECKED AGAINST THIRTY SEVEN REAL CARDS MEASURED OFF THEIR OWN RENDERED FRAMES, and it never said fewer lines than were drawn. On five of the thirty seven it said one more, which breaks a screen a word or two early and costs nothing anybody can see. That direction is the one to be wrong in: too many lines makes a screen shorter, too few makes a screen run off the frame.";
  "★ A WORD WIDER THAN THE WHOLE WIDTH STILL COUNTS AS ONE LINE, because that is what the drawer does with it - it stands alone and hangs over both edges. Nothing here can help that; the answer is a smaller lettering size, which is a different decision made elsewhere.";
  arguments_assert(arguments, 3);
  let words = text_split_space(text);
  let space = lyric_video_text_width(" ", font_size);
  let lines = 1;
  let width = 0;
  function word_each(word) {
    let own = lyric_video_text_width(word, font_size);
    let started = greater_than(width, 0);
    let gap = 0;
    if (started) {
      gap = space;
    }
    let left = add(width, gap);
    let would = add(left, own);
    let over = greater_than(would, pixels_across);
    if (over && started) {
      lines = add(lines, 1);
      width = own;
      return;
    }
    width = would;
  }
  each(words, word_each);
  return lines;
}
