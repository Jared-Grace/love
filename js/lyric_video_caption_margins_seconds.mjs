import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_caption_margins_seconds() {
  arguments_assert(arguments, 0);
  ("How much of each end of a caption's window on screen is not looked at when asking what is sung under it that the caption does not say.");
  ("★ THE TWO ENDS ARE IGNORED FOR TWO DIFFERENT REASONS AND SO ARE TWO DIFFERENT LENGTHS. At the start, the caption's own words are being sung, and a word of the caption misheard is spelled differently from the caption and would be counted as something else - Psalm 133 sings collar and the listener writes color. Three seconds covers a line being sung. At the end, the next caption's first word is already being sung before the caption changes, because a line is placed about four tenths of a second after its first word is heard; one second covers that.");
  ("Both are honest blind spots rather than tuning. A repeat of a whole verse runs for tens of seconds and cannot hide in either of them, and a fault small enough to hide there is one nobody watching would catch.");
  let margins = {
    start: 3,
    end: 1,
  };
  return margins;
}
