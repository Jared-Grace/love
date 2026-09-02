import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
export function bible_glyph_negation_idiom_closes_is(previous_strong, strong) {
  "Whether one original word CLOSES the Greek emphatic double negative, meaning the word standing immediately before it in the verse is the other half of that idiom.";
  "$plain previous_strong";
  "the previous strong is the Strong's number of the word standing immediately before this one in the original, or nothing where this word opens the verse. It is a word to compare and nothing that runs.";
  "$plain strong";
  "the strong is this word's own Strong's number. It is a word to compare and nothing that runs.";
  "GREEK SAYS CERTAINLY NOT WITH TWO NEGATIVES AND MEANS ONE NEGATION. Every reading that pairs marks against words assumes one word wants one mark, and for this idiom that assumption inverts the verse: a reader who meets two negation marks in a row does the arithmetic, cancels them, and reads the strongest assurance in the chapter as its own opposite. So a caller counting how many marks a verse's words want counts the closing half as none.";
  "IMMEDIATELY BEFORE IS THE WHOLE OF IT AND A FILTERED LIST CANNOT ANSWER IT. Asked over the negations alone, the two halves of a sentence that negates twice in two separate clauses stand next to each other and read as the idiom, which they are not - the twenty fourth of Mark twelve and the thirty seventh of John ten are both that shape. So the word before has to be the word before in the verse, every other word included.";
  "IT IS KEYED ON THE TWO NUMBERS AND NEVER ON THE ROOT NAME. The root that holds plain not also holds no one, and no one standing beside do not is two separate words meaning two separate things - collapsing those would hide a real fault.";
  "EVERY NUMBER IS READ AS TEXT BEFORE IT IS COMPARED. A Strong's number arrives spelled out in the seed tables and counted as a number by the interlinear, the two are never equal to one another, and a comparison that quietly fails here does not throw - it reports the idiom as two ordinary words and sends a correct verse to a person.";
  arguments_assert(arguments, 2);
  let before = text_to(previous_strong);
  let here = text_to(strong);
  let opens = equal(before, "3756");
  let closes = equal(here, "3361");
  let r = and(opens, closes);
  return r;
}
