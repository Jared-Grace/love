import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
export function bible_glyph_gloss_placeholder_is(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "Whether a wording the interlinear printed is a filler standing in for a word rather than a wording of it.";
  "The tables print four of these. A row of dots stands where the English of the surrounding phrase carries the word and no separate English of it can be pointed at, and vvv marks a word whose English has been pulled forward or back into a neighbouring row. A dash stands where the original says a word English does not say - the article before a name, the particle marking an object - and an empty wording is a row the table left blank. None of the four is a meaning, so counting one as one would make a word look like it had more senses than it has, which is the exact number this survey is trying to measure honestly.";
  "THE DASH AND THE BLANK WERE ADDED ON 2026-08-21 AND THE READING WAS WIDENED RATHER THAN COPIED. A survey next door had been asking this and then asking two more things of its own, with a paragraph saying the widening should be somebody's deliberate act because it would move this reading's numbers as a side effect. It is that act. Two functions holding one judgment is the arrangement where a later reader improves the copy in front of them and never learns of the other, and there was no disagreement between them to preserve - only a question of who was allowed to say so.";
  "IT MOVES THREE READINGS AND EVERY ONE OF THEM TOWARDS THE TRUTH. The survey of word senses stops counting a dash as a sense a word has been given. The survey of undrawn words is unchanged, because it was already asking all four. And the English band under the pictures stops printing the dashes - which is not a number at all but the thing a reader meets, and it read as scripture saying whether from - God they are.";
  "A DASH IS NOT AN EM DASH AND NOTHING HERE FOLDS THE TWO. What the tables print is the plain hyphen, on its own, as the whole of a row; a wording that merely contains one is a wording. Matching the whole text rather than looking inside it is what keeps a hyphenated English word out of this.";
  let dots = equal(gloss, ". . .");
  let carried = equal(gloss, "vvv");
  let unsaid = equal(gloss, "-");
  let blank = equal(gloss, "");
  let notation = or(dots, carried);
  let missing = or(unsaid, blank);
  let v = or(notation, missing);
  return v;
}
