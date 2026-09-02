import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_paragraph_marks_removed } from "./text_paragraph_marks_removed.mjs";
import { list_map } from "./list_map.mjs";
export function bible_verses_paragraph_marks_removed(verses) {
  arguments_assert(arguments, 1);
  ("$plain verses");
  ("The verses of one chapter with the printer's paragraph marks taken out of their words.");
  ("THE MARKS ARE ALREADY IN STORAGE, WHICH IS THE WHOLE REASON THIS IS DONE ON THE WAY OUT AND NOT ON THE WAY IN. The chapters were read off their pages and uploaded before anything took the marks off, so every reader that downloads one gets the mark whatever the reading does now. Taking them off as a chapter is handed to a reader fixes every reader at once and costs one pass over words already in hand; re-reading and re-uploading every chapter of every bible would fix the same thing at the price of a whole shelf.");
  ("It is safe to run on words that have no mark in them, which is what lets it sit on the road out of storage rather than in a branch that has to know which chapters were uploaded when. A chapter uploaded after the reading was fixed simply has nothing for it to take.");
  ("A verse is its number and its words and nothing else, so the verse handed back is built from those two rather than copied and patched. That is the shape every verse read off a page is given when it is made.");
  function lambda(verse) {
    let verse_number = property_get(verse, "verse_number");
    let text = property_get(verse, "text");
    let unmarked = text_paragraph_marks_removed(text);
    let v = {
      verse_number,
      text: unmarked,
    };
    return v;
  }
  let cleaned = list_map(verses, lambda);
  return cleaned;
}
