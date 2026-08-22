import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_reference_chapter_verse_shape_is } from "./bible_reference_chapter_verse_shape_is.mjs";
import { not } from "./not.mjs";
export function bible_reference_book_chapter_verses_shape_not_is(
  book_name,
  chapter_verses,
) {
  "$plain book_name";
  "$plain chapter_verses";
  "Is this reference, already cut into the book it names and everything written after it, missing the chapter and verse a passage has to name.";
  "IT ANSWERS THE SAME QUESTION AS THE WHOLE-REFERENCE ASK AND IS NOT A SECOND OPINION ON IT. It puts the two halves back together and hands them there, so the one sentence saying what a reference must look like is written once. A reader who has the two halves is the one reading them out of a line of text, and joining them again at every such site is where the two spellings of the rule would start to drift.";
  "It answers the negative because that is the answer its readers act on: a reference of this shape is stepped over, and a name saying so lets the stepping over read as one sentence rather than as a value and then a turn of it.";
  arguments_assert(arguments, 2);
  let reference = text_combine_multiple([book_name, " ", chapter_verses]);
  let shaped = bible_reference_chapter_verse_shape_is(reference);
  let unshaped = not(shaped);
  return unshaped;
}
