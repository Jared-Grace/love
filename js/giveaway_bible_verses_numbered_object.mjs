import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
export function giveaway_bible_verses_numbered_object(verses) {
  arguments_assert(arguments, 1);
  ("$plain verses");
  ("One psalm as a verse number against that verse's words, for the person writing a program over a box rather than reading it.");
  ("★ IT IS AN OBJECT KEYED BY THE VERSE NUMBER AND NOT A LIST, BECAUSE THE QUESTION ASKED OF IT IS ALWAYS WHICH VERSE. A box's singing names a verse range in its file name, so every join anybody makes from a box starts by asking for a numbered verse - an object answers that by looking the number up, while a list makes the asker walk it and compare. A list would also tempt the reader to take verse five as the fifth entry, which is true of most psalms and false of the ones that open elsewhere or run two verses together.");
  ("★ THE KEYS ARE THE NUMBERS AS THEY ARE WRITTEN, SO THEY ARE TEXT AND NOT COUNTS. A verse number is not always a plain number - a translation may carry a verse as `2-3` where two verses are run together - and a shape that only admits whole numbers would have to drop or renumber those. Keeping the written form means every verse of every translation fits with no exception to explain, and a reader asking for `5` gets the same answer either way.");
  ("★ IT SAYS THE SAME THING THE NUMBERED TEXT FILE SAYS, AND THAT IS NOT DUPLICATION BUT THE POINT. Both files are the psalm with its numbers; one is shaped for eyes and one for a program. Asking the program's reader to parse the text file would be asking them to write the one piece of code that this box can write once for everybody, and getting it wrong is silent - a verse whose words hold a digit, a line that wrapped.");
  ("Nothing of the box is in here but the words and their numbers. What psalm it is, and which translation, are in the file name, where they are frozen and cannot drift from the box they sit in.");
  let numbered = {};
  for (let verse of verses) {
    property_set(numbered, verse.verse_number, verse.text);
  }
  return numbered;
}
