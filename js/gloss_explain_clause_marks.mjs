import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_clause_marks() {
  "The marks that end one thought inside a word explanation and start the next.";
  "A WORD EXPLANATION SAYS SEVERAL THINGS IN A ROW AND ONLY ONE OF THEM IS ABOUT THE VERSE IT NAMES, so the sentence has to be cut before anything standing in it can be read as belonging to the number. It is the same verb that came in verse twenty-one: the present-time form of 'be' names verse twenty-one about the word being explained, and then quotes a different word to say what that word is a form of. Read whole, the quoted word looks like the subject of the claim; read as two thoughts, it plainly is not. Measured on 2026-09-25 over the Urdu store, cutting at the colon alone moved nine rows from one answer to the other, and one of those was a fault already confirmed by hand - so a reading that did not cut there would have described a real fault wrongly.";
  "THE COLON IS ON THIS LIST AND IT IS THE ONE THAT HAD TO BE ARGUED FOR. Every other mark here plainly ends a sentence; a colon plainly does not. What it does is hand over from a claim to the gloss of a claim, and a gloss is exactly the place a different word gets quoted. So it ends a thought for this reading's purposes even though it ends no sentence.";
  "Both scripts are on the list together rather than being chosen between, for the same reason the comma marks are: a reading that asked after one store's marks by hand would be right in that store and blind in the other, and blindness here is silent.";
  "A dash is on the list and a comma is not. A comma stands inside a list of verses without ending it, which is the one thing every reading here has to keep; a dash always breaks off into something else.";
  "Nothing on this list names anything that runs - they are marks a person types.";
  arguments_assert(arguments, 0);
  let r = ["۔", "؛", "؟", ":", ".", ";", "?", "!", "—", "–"];
  return r;
}
