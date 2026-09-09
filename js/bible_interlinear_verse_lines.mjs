import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_verse } from "./bible_interlinear_verse.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_interlinear_verse_lines(reference) {
  "$plain reference";
  "the wording names one verse, like Exodus 9:7. It is looked up as text and nothing runs it.";
  arguments_assert(arguments, 1);
  ("One verse of the interlinear said as one short line per original word: the dictionary number, then how the word sounds, then the English the table printed under it.");
  ("IT EXISTS BECAUSE THE FULL READING IS TOO WIDE TO READ AND GETS CUT IN HALF. The reading next door hands back seven fields for every word - the pointed original, two spellings of the parsing, a sort number - and a verse of thirty words then runs past the length the answer is allowed to be, so the middle is elided and the reader is shown the two ends of the thing they were checking. The three fields kept here are the three a seating question needs: the number says which root, the sound says which word, and the English says where the picture was hung.");
  ("IT IS THE READING A DOUBLED MARK IS DECIDED WITH. A verse that draws a mark more often than the table seats it has put the picture on a second root, and the only thing that says which root is the original itself. Asking for the whole verse rather than one word is deliberate: the fault is nearly always that two different original words were given the same English word, so the answer has to show the neighbours too.");
  let words = await bible_interlinear_verse(reference);
  let lines = [];
  for (let word of words) {
    let strong = property_get(word, "strong");
    let translit = property_get(word, "translit");
    let gloss = property_get(word, "gloss");
    let v = String(strong);
    let line = list_join_space([v, translit, gloss]);
    list_add(lines, line);
  }
  return lines;
}
