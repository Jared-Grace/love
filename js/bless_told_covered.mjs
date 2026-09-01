import { arguments_assert } from "./arguments_assert.mjs";
import { bless_people_noun } from "./bless_people_noun.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { bless_rung_phrase_one } from "./bless_rung_phrase_one.mjs";
export function bless_told_covered(count, rung) {
  arguments_assert(arguments, 2);
  ("The line shown after a prayer that reached more than the one person it was said over -");
  ("how many people it covered, and the one place they were all in.");
  ("A prayer for a whole family lights three faces at once, and two of them are usually");
  ("somewhere else on the street where the player cannot see them go bright. Without this,");
  ("a rung that tripled the work looks exactly like the rung below it, and the player has");
  ("no way to tell that anything they earned is being spent.");
  ("It counts PEOPLE, because people are what the player came to pray for, and then it");
  ("names the place they were counted in, because the count on its own does not say what");
  ("just happened. Three people is a number; three people in one family is the rung, said");
  ("in the only way it can be understood - by what it came to. A line naming the place");
  ("alone would be true and would say nothing, and a line counting alone leaves the player");
  ("to work out for themselves why the number is three and not one.");
  ("So the two halves teach each other, and neither needs a tutorial: the player learns");
  ("what a family holds by watching one get prayed for, and learns what the rung is worth");
  ("by the number in front of it. The next rung then says nine in one building with no");
  ("further explanation needed.");
  ("The place is the reach the prayer was said UNDER, not the reach earned by saying it. A");
  ("prayer that finishes a family off is the last prayer at the family rung, not the first");
  ("at the building rung, and naming the rung it just unlocked would credit this prayer");
  ("with a reach it never had.");
  ("Nothing to name means the count stands on its own. That is the prayer said before any");
  ("rung was earned at all, and it cannot cover more than one person, so the line is here");
  ("for completeness rather than for anybody to read.");
  let noun = bless_people_noun(count);
  let counted = text_combine_multiple(["You prayed for ", count, " ", noun]);
  let nowhere = null_is(rung);
  if (nowhere) {
    return counted;
  }
  let where = bless_rung_phrase_one(rung);
  let line = text_combine_multiple([counted, " ", where]);
  return line;
}
