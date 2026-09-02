import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export function bible_glyph_negation_idiom_marks_expected(strongs) {
  "How many marks a picture Bible verse is expected to draw for a run of original words, counting the Greek emphatic double negative as the ONE thing it means rather than as the two words it is written with.";
  "$plain strongs";
  "the strongs are one verse's Strong's numbers for one picture, in the order the original puts them, given as plain text. They are words to count and nothing that runs.";
  "GREEK SAYS CERTAINLY NOT WITH TWO NEGATIVES AND MEANS ONE NEGATION. Every other pairing of marks against words in this Bible assumes one word wants one mark, and for this idiom that assumption inverts the verse: a reader who meets two negation marks in a row does the arithmetic, cancels them, and reads the strongest assurance in the chapter as its own opposite. So the idiom is counted as one mark, which is what the authored chapters have been drawing all along.";
  "IT IS KEYED ON THE TWO NUMBERS AND NEVER ON THE ROOT NAME. The root that holds plain not also holds no one, and no one standing beside do not is two separate words meaning two separate things - collapsing those would hide a real fault. Only three thousand seven hundred and fifty six immediately followed by three thousand three hundred and sixty one is the idiom.";
  "A COLLAPSED PAIR STOPS BEING A FIRST HALF, so a run of three negatives cannot fold twice. The second word of the idiom is spent by the pair it completed, and the word after it starts its own count.";
  arguments_assert(arguments, 1);
  let expected = 0;
  let previous = "";
  for (let strong of strongs) {
    let opens = equal(previous, "3756");
    let closes = equal(strong, "3361");
    let idiom = and(opens, closes);
    let fresh = not(idiom);
    if (fresh) {
      expected = add(expected, 1);
    }
    previous = idiom ? "" : strong;
  }
  return expected;
}
