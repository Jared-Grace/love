import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { number_pad } from "./number_pad.mjs";
import { text_combine } from "./text_combine.mjs";
export function verse_name_pad(verse_name, count) {
  arguments_assert(arguments, 2);
  ("$plain verse_name");
  ("$plain count");
  ("A verse's own name widened to a fixed number of digits, so that a list of verse names sorts as words in the order a reader counts them.");
  ("★ A VERSE IS NOT ALWAYS A NUMBER, WHICH IS WHY PADDING ONE IS NOT THE SAME AS PADDING A NUMBER. Six of the sung passages on this disk are cut in the middle of a verse, and the singing names those halves the way a reader of the text names them: Psalm 95 runs 1 to 7a and then 7b to 11, Psalm 104 runs 14 to 24b and then 24c to 31, Psalm 145 runs 1 to 13a and then 13b to 21. Handed 7a, a plain number padding counts the letter as one of the three places it was told to fill and hands back 07a, which sorts after 070 - so in a chapter long enough to have a verse 70, a part beginning at verse 7a would be listed after it. This was found by reading the written-out names rather than by reasoning about them, which is the argument for writing them out before anything is published under one.");
  ("The letter is set aside, the digits are padded on their own, and the letter is put back after them. It is given no width of its own, because every letter that occurs is a single one and a width would have to guess at a second.");
  ("A verse with no letter comes back exactly as a plain number padding would have left it, so this is safe to use everywhere a verse is padded and there is no second rule to remember for the ones that are plain.");
  let verse_text = text_from_number(verse_name);
  let digits = text_digits_only(verse_text);
  let letters = text_letters_only(verse_text);
  let digits_padded = number_pad(digits, count);
  let padded = text_combine(digits_padded, letters);
  return padded;
}
