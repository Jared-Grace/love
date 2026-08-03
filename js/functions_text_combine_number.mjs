import { js_text_combine_number_codes } from "./js_text_combine_number_codes.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_text_combine_number() {
  "Audit: every function in this repo that joins text to a plain number written out on the spot.";
  "Joining text to a number is addition wearing the wrong name. The line inside the two functions is the same one, so nothing these do is wrong - but a reader meeting a joining of text goes looking for the word being built, and there is no word, only a count going up by one.";
  "The judgment is asked of one file at a time next door, so a single file can be looked at without walking the whole folder, and the change that clears these asks that same one.";
  let offenders = await functions_ast_offenders_generic(
    js_text_combine_number_codes,
    "calls",
  );
  return offenders;
}
