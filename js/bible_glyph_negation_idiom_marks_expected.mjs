import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export function bible_glyph_negation_idiom_marks_expected(strongs) {
  "How many marks a picture Bible verse is expected to draw for a run of original words, counting the Greek emphatic double negative as the ONE thing it means rather than as the two words it is written with.";
  "$plain strongs";
  "the strongs are one verse's Strong's numbers for one picture, in the order the original puts them. They are words to count and nothing that runs.";
  "GREEK SAYS CERTAINLY NOT WITH TWO NEGATIVES AND MEANS ONE NEGATION. Every other pairing of marks against words in this Bible assumes one word wants one mark, and for this idiom that assumption inverts the verse: a reader who meets two negation marks in a row does the arithmetic, cancels them, and reads the strongest assurance in the chapter as its own opposite. So the idiom is counted as one mark, which is what the authored chapters have been drawing all along.";
  "IT IS KEYED ON THE TWO NUMBERS AND NEVER ON THE ROOT NAME. The root that holds plain not also holds no one, and no one standing beside do not is two separate words meaning two separate things - collapsing those would hide a real fault. Only three thousand seven hundred and fifty six immediately followed by three thousand three hundred and sixty one is the idiom.";
  "A COLLAPSED PAIR STOPS BEING A FIRST HALF, so a run of three negatives cannot fold twice. The second word of the idiom is spent by the pair it completed, and the word after it starts its own count.";
  "EVERY NUMBER IS READ AS TEXT BEFORE IT IS COMPARED. A Strong's number arrives spelled out in the seed tables and counted as a number by the interlinear, the two are never equal to one another, and a comparison that quietly fails here does not throw - it reports the idiom as two ordinary words and sends a correct verse to a person.";
  arguments_assert(arguments, 1);
  let expected = 0;
  let previous = "";
  for (let strong of strongs) {
    let word = text_to(strong);
    let opens = equal(previous, "3756");
    let closes = equal(word, "3361");
    let idiom = and(opens, closes);
    let fresh = not(idiom);
    if (fresh) {
      expected = add(expected, 1);
    }
    previous = idiom ? "" : word;
  }
  return expected;
}
