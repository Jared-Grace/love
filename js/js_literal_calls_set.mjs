import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_strings_code_replace_generic } from "./js_strings_code_replace_generic.mjs";
import { not } from "./not.mjs";
export async function js_literal_calls_set(ast, literal, f_name) {
  arguments_assert(arguments, 3);
  ("Points every place in one file that spells a written word at the function that");
  ("hands that word back, and answers how many places it was.");
  ("Whether the word means the same thing here as it does there is not asked, and");
  ("that is the whole of the difference from the narrower one beside this. Asking it");
  ("would be guessing: two files spell a word alike for no reason at all about as");
  ("often as they spell it alike on purpose, and the two read identically until");
  ("something forces them apart. So the reading is the caller's, made once when they");
  ("name the file and the function, and what is done here is done on that reading.");
  ("What keeps that safe is not the guess this refuses to make - it is that a value");
  ("behind a name is never changed in place. The day one site wants a different word");
  ("it gets a second function holding it, and the sites move over one at a time, so");
  ("a word routed here on a reading that turns out wrong costs one move to undo and");
  ("nothing at all in the meantime.");
  ("Prose, and the places a rename must never follow, are left alone by the sweep");
  ("underneath rather than by anything written here. It answers for the sibling");
  ("that joins an address onto a folder's function too, so what is left in each is");
  ("only the reading: which words are to be written over, and what is to stand in");
  ("their place.");
  let call_code = js_code_call_args(f_name, []);
  function call_code_or_null(value) {
    let same = equal(value, literal);
    if (not(same)) {
      return null;
    }
    return call_code;
  }
  let changed = await js_strings_code_replace_generic(ast, call_code_or_null);
  return changed;
}
