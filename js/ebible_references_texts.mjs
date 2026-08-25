import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function ebible_references_texts(references_comma) {
  "$plain references_comma";
  "The words the English bible holds at each of several references, named the way a person writes them and joined with commas - 'John 3:16, Romans 5:8' - answered as each reference against its words.";
  "THE LIST OF BOOKS IS FETCHED ONCE FOR THE WHOLE LIST. That fetch is the slow half of answering even one reference, so asking a hundred references one at a time costs a hundred times what asking them together does. Anything writing out a set of references wants this name and not the singular one.";
  "A reference this bible does not carry is answered with null and the rest are still answered, so one mistyped reference in a hand-written list cannot take the other thirty down with it.";
  "The spaces people leave after their commas are taken off, because 'John 3:16, Romans 5:8' is how a person writes a list and ' Romans 5:8' is not a reference.";
  "SEVERAL AT A TIME RATHER THAN ONE AFTER ANOTHER, because each reference that is not in a chapter already on this disk has to wait for that chapter to come down, and waiting for one is no reason to stop asking for the next. Measured, five references took fifty-four seconds one behind the other, nearly all of it waiting. A few at a time and not all at once, because the answer is a set of chapters and asking for a hundred at once would only queue them somewhere else.";
  "The reading itself is next door and takes the bible as well, so a page wanting a passage in the reader's own language asks the same question with a different first word. This name is the English one, which is what a person at a command line means.";
  arguments_assert(arguments, 1);
  let references = text_split_comma_trimmed(references_comma);
  let folder = ebible_folder_english();
  let texts = await ebible_folder_references_texts(folder, references);
  return texts;
}
