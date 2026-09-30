import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_clause_marks } from "./gloss_explain_clause_marks.mjs";
import { gloss_explain_clause_here_words } from "./gloss_explain_clause_here_words.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function gloss_explain_clause_cuts() {
  "Everything that ends one thought inside a word explanation and starts the next: the marks a person types, and the words a person writes to turn back to the word in front of the reader.";
  "The two are kept apart behind this one door because they are found different ways and argued for different ways, and joined in front of it because the reading that cuts the sentence wants all of them and has no use for the difference.";
  "★ CUTTING HERE CANNOT CHANGE WHICH VERSES A SENTENCE NAMES, WHATEVER IS ADDED TO THIS LIST, AND THAT IS THE PROPERTY WORTH KEEPING. A run of verse numbers is carried on only by a number, by a comma and by the joining word. Nothing on either list is one of those, so every cut falls where a run had already ended. The numbers found thought by thought are therefore exactly the numbers found over the whole sentence, and the cut decides only which quoted words stand beside which number. Anything proposed for this list has to be held to that same test before it goes on.";
  "Nothing on this list names anything that runs.";
  arguments_assert(arguments, 0);
  let r = gloss_explain_clause_marks();
  let words = gloss_explain_clause_here_words();
  list_add_multiple(r, words);
  return r;
}
