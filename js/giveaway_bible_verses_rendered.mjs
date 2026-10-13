import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { giveaway_bible_verses_words_text } from "./giveaway_bible_verses_words_text.mjs";
import { giveaway_bible_verses_numbered_text } from "./giveaway_bible_verses_numbered_text.mjs";
import { giveaway_bible_verses_numbered_object } from "./giveaway_bible_verses_numbered_object.mjs";
import { json_to_indented } from "./json_to_indented.mjs";
export function giveaway_bible_verses_rendered(verses, mark, ending) {
  arguments_assert(arguments, 3);
  ("$plain verses");
  ("$plain mark");
  ("$plain ending");
  ("The words of one passage written out in whichever of the three given-away shapes a mark and an ending name between them.");
  ("★ THE PAIR IS LOOKED UP RATHER THAN TESTED, SO AN UNKNOWN PAIR THROWS INSTEAD OF FALLING THROUGH TO ONE OF THE THREE. A chain of tests on the mark would have to end somewhere, and whatever it ended on would quietly become the answer for every pair nobody thought of - a file named for a shape that was never written, holding the shape that happens to be last. The lookup names the missing pair and lists the pairs that exist.");
  ("★ THE TABLE HOLDS WORDS AND NOT FUNCTIONS, BECAUSE A LIFTED FUNCTION IN A TABLE IS A DIFFERENT THING FROM ONE WRITTEN WHERE IT IS CALLED. Keeping the table to plain words leaves it as data the eye can check against the list of renderings, and the choosing is three plain comparisons below it.");
  ("The mark and the ending are both needed because neither alone picks a shape: there are two numbered files and they differ only by ending, and two files ending in txt that differ only by mark.");
  let shapes = {
    "words.txt": "words",
    "numbered.txt": "numbered",
    "numbered.json": "json",
  };
  let key = text_combine(mark, ending);
  let shape = property_get(shapes, key);
  if (equal(shape, "words")) {
    let words = giveaway_bible_verses_words_text(verses);
    return words;
  }
  if (equal(shape, "numbered")) {
    let numbered = giveaway_bible_verses_numbered_text(verses);
    return numbered;
  }
  let object = giveaway_bible_verses_numbered_object(verses);
  let json = json_to_indented(object);
  return json;
}
