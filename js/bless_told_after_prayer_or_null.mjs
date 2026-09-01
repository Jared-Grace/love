import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { bless_told_reach } from "./bless_told_reach.mjs";
import { less_than } from "./less_than.mjs";
import { bless_told_covered } from "./bless_told_covered.mjs";
export function bless_told_after_prayer_or_null(rung_before, rung_now, faces) {
  arguments_assert(arguments, 3);
  ("The one line to put up after a prayer, or nothing where there is nothing worth saying.");
  ("ONE line and never two. A prayer that finishes a place off both covers several people");
  ("and earns a rung, and the two sentences about it would arrive in the same instant at");
  ("the same spot on the screen and cover each other up. The climb wins that tie because it");
  ("is the rarer and larger news - a count is said again on the very next prayer, while a");
  ("rung is earned once in a game.");
  ("Told by comparing the rung BEFORE with the rung AFTER rather than by being handed a");
  ("yes or no, so the climb and the reach it climbed to are one fact read here rather than");
  ("two facts the caller has to keep agreeing with each other.");
  ("The very top of the ladder climbs to NOTHING - there is nowhere further out than every");
  ("person alive - so a climb is only a climb where there is a rung to name. Finishing the");
  ("world falls through to the count instead, which is the truer line anyway: what the last");
  ("prayer covered rather than what it unlocked, because it unlocked nothing.");
  ("The count is the faces that actually LIT, handed in from the prayer, and never the size");
  ("of the rung. A household rung reaches a whole family every time it is prayed, but most of");
  ("them are usually already blessed from earlier prayers, and the player watched");
  ("exactly one face light up. Saying the family size there is a number nobody saw happen,");
  ("which teaches them that the line is decoration rather than news.");
  ("Fewer than two says nothing, and that one test covers two different quiet cases. One");
  ("new face needs no sentence - the player just watched it light, and a line repeating it");
  ("every few seconds through the opening stretch of the game teaches them to stop reading");
  ("these. Zero new faces is the prayer that only filled a house in, over people who were");
  ("all blessed already, and a line counting nobody would be worse than silence.");
  let finished = null_is(rung_now);
  let same = equal(rung_before, rung_now);
  let stayed = or(same, finished);
  let climbed = not(stayed);
  if (climbed) {
    let reach = bless_told_reach(rung_now);
    return reach;
  }
  let alone = less_than(faces, 2);
  if (alone) {
    return null;
  }
  let counted = bless_told_covered(faces);
  return counted;
}
