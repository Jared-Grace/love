import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bless_told_reach } from "./bless_told_reach.mjs";
import { bless_place_people } from "./bless_place_people.mjs";
import { bless_told_covered } from "./bless_told_covered.mjs";
export function bless_told_after_prayer_or_null(rung_before, rung_now) {
  arguments_assert(arguments, 2);
  ("The one line to put up after a prayer, or nothing where there is nothing worth saying.");
  ("ONE line and never two. A prayer that finishes a place off both covers several people");
  ("and earns a rung, and the two sentences about it would arrive in the same instant at");
  ("the same spot on the screen and cover each other up. The climb wins that tie because it");
  ("is the rarer and larger news - a count is said again on the very next prayer, while a");
  ("rung is earned once in a game.");
  ("The bottom rung says nothing. A prayer there reaches the one person it was said over,");
  ("the player watched that face light up, and a line repeating it every few seconds for");
  ("the whole opening stretch of the game would teach the player to stop reading these.");
  ("Told by comparing the rung BEFORE with the rung AFTER rather than by being handed a");
  ("yes or no, so the climb and the reach it climbed to are one fact read here rather than");
  ("two facts the caller has to keep agreeing with each other.");
  ("The very top of the ladder climbs to NOTHING - there is nowhere further out than every");
  ("person alive - so a climb is only a climb where there is a rung to name. Finishing the");
  ("world falls through to the count instead, which is the truer line anyway: what the last");
  ("prayer covered rather than what it unlocked, because it unlocked nothing.");
  let finished = null_is(rung_now);
  let same = equal(rung_before, rung_now);
  let stayed = or(same, finished);
  let climbed = not(stayed);
  if (climbed) {
    let reach = bless_told_reach(rung_now);
    return reach;
  }
  let covered = bless_place_people(rung_before);
  let alone = equal(covered, 1);
  if (alone) {
    return null;
  }
  let counted = bless_told_covered(covered);
  return counted;
}
