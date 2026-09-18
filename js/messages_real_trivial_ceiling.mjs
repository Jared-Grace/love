import { arguments_assert } from "./arguments_assert.mjs";
export function messages_real_trivial_ceiling() {
  arguments_assert(arguments, 0);
  ("The length at or below which a message somebody really sent is trivial - a greeting or a single word - and so may be written down in this repo as a worked case.");
  ("★ A REAL MESSAGE IS SOMEBODY ELSE'S WRITING AND BELONGS TO THEM, so the rule is that worked cases are made up rather than quoted, and this is the one exception: a message that is only hello identifies nobody and there is no other way to write the case for hello. Everything longer says something about the person who wrote it - where they are, what they do, what they are asking for - and a made-up message matching the same rules tests the same thing without publishing theirs.");
  ("★ THE NUMBER IS MEASURED, NOT CHOSEN. Over everything brought down as of 2026-09-18 the longest greeting-only message is thirty two characters and the shortest substantive one is fifty two, so any line drawn between them separates the same two groups. Forty sits in the middle of that gap, which is what makes the answer insensitive to the next message arriving rather than balanced on the edge of the last one.");
  let ceiling = 40;
  return ceiling;
}
