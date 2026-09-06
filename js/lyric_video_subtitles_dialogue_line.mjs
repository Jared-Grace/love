import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_subtitles_dialogue_line({
  start,
  end,
  style,
  effect,
  text,
}) {
  arguments_assert(arguments, 1);
  ("$plain start");
  ("$plain end");
  ("$plain style");
  ("$plain effect");
  ("$plain text");
  ("Writes one Dialogue line of a subtitle file: some words, the moment they go up and the moment they come down, which of the described letterings they are drawn in, and what is done to them while they stand.");
  ("★ THE FIELDS BETWEEN THE STYLE AND THE WORDS ARE NOT ASKED FOR BECAUSE NOTHING HERE EVER SETS THEM. They are the speaker's name and three margins that would override the ones the style already gives, and every line this file writes wants the style's own. Writing them out once as the empty word and three zeros says that on the face of it, where five parameters that are always the same would invite somebody to fill one in and quietly lose a margin the screen room worked out.");
  ("★ THE TWO MOMENTS ARRIVE ALREADY WRITTEN AS TIME RATHER THAN AS SECONDS. The line that stands through the whole song begins at a moment nobody counted to, and a sung line begins at a moment that has already had the lead taken off it, so the two callers are not holding the same kind of number. Turning seconds into time here would mean choosing which of them is telling the truth, and neither caller is asking that.");
  ("The effect is handed in already spelled out, and the braces around it are written here because they are part of the line's shape rather than part of what anybody is asking for.");
  let names = ",,0,0,0,,";
  let opening = "Dialogue: 0," + start + "," + end + ",";
  let named = style + names;
  let held = "{" + effect + "}" + text;
  let line = opening + named + held;
  return line;
}
