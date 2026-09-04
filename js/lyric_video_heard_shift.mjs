import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_heard_shift() {
  "How many seconds late a transcriber's word times are against an aligner's, so that the two can be compared as though they told the same time.";
  "★ IT IS A CORRECTION AND NOT A PREFERENCE. Measured line by line on a psalm whose right times were known, the transcriber ran early on twenty seven of thirty two lines and by much the same amount each time; the middle of those differences is this number. Taking it off leaves differences that are scattered rather than leaning one way, which is what says a steady shift was the whole of it.";
  "★ NOTHING SHOWN TO A PERSON IS EVER MOVED BY THIS. It exists so a disagreement between two readings means one of them is wrong, rather than meaning the two count from different places. The lines a video shows come from the aligner, unshifted.";
  "It is one number for every song rather than one worked out per song, because a shift worked out per song would be fitted to that song's own disagreements and could no longer be evidence about them.";
  arguments_assert(arguments, 0);
  let shift = 0.4;
  return shift;
}
