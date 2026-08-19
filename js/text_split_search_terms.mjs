import { arguments_assert } from "./arguments_assert.mjs";
import { text_comma_dot_separators } from "./text_comma_dot_separators.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function text_split_search_terms(search) {
  "The words of a search taken apart wherever one ends and the next begins - at a comma, and at a space too.";
  "A space separates here and nowhere else. Everywhere else in this repo a joined list arrives from a command line, where a space already ended the argument, so splitting on one could only tear a value in half. A search is the opposite case: it is asked in words, and the words are typed the way anybody types words.";
  "Splitting on a space cannot lose an answer. Asked as one run of text, a search is a phrase and matches only where the phrase sits whole; asked as separate words it matches wherever all of them sit, which is everywhere the phrase did and more. So every search that found something still finds it, and the searches that found nothing are the only ones that change.";
  "That silence is why this exists. On 2026-08-19 a command was rebuilt from scratch that the repo already had, after a purpose search asked as a sentence came back empty - the whole sentence was one substring nothing could hold. Nothing was wrong with the words; they were joined by the one character that did not separate them.";
  arguments_assert(arguments, 1);
  let delimiters = text_comma_dot_separators();
  list_add(delimiters, " ");
  let terms = text_split_multiple(search, delimiters);
  return terms;
}
