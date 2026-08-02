import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_string_site_labels } from "./js_string_site_labels.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_code_literal_site_none(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether a file writes a given word nowhere that a call could ever stand.");
  ("A report of repeated spellings finds its candidates by asking whether the");
  ("file's text carries the quoted word anywhere at all. That question cannot");
  ("tell a written constant from the same letters sitting inside a longer");
  ("string, or inside a comment, and both of those are found by it.");
  ("The two drops beside this one both begin by finding the word as a written");
  ("string of its own and then asking what it is doing there, so neither of them");
  ("sees a word that is not a written string at all - it looks to them like a");
  ("file with no mentions, which reads as nothing to drop.");
  ("A sentence that quotes a name while explaining an argument is the case that");
  ("found this. Offering it asks for a call to be put where a run of letters");
  ("inside somebody's sentence is, which is not a thing that can be done.");
  let ast = js_parse(code);
  let labels = js_string_site_labels(ast, literal);
  let none = list_empty_is(labels);
  return none;
}
