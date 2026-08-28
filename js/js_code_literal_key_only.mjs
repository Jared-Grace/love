import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_string_site_key_is } from "./js_string_site_key_is.mjs";
import { js_ast_literal_named_only } from "./js_ast_literal_named_only.mjs";
export function js_code_literal_key_only(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether every place a file writes a given word, outside its own account of itself, is a place where a field is being named.");
  ("A report of repeated spellings offers to move a word behind the function that already returns it. Where the word is a field name that offer is not tidying, it is a change to the shape of the data - and this repo saves whole objects, so those shapes are already written on disks nobody here can reach. The merge would tie a name in somebody's saved file to a name in this code, and every later rename would leave the saved file unreadable.");
  ("So a file whose only mentions are field names is not a site the report should offer, in the same way and for a stronger reason than a sentence that merely mentions the word. The sentence cannot be repaired; this one must not be.");
  ("Deciding that a site names a field is the whole of what is this one's own, and it is asked of where the word stands rather than of the word itself, which is what makes it the wider of the two questions. Walking the file, passing over its own prose and requiring that every site found agrees are said once next door.");
  let ast = js_parse(code);
  function js_code_literal_key_only_key_is(node, stack) {
    let key_is = js_string_site_key_is(stack);
    return key_is;
  }
  let key_only = js_ast_literal_named_only(
    ast,
    literal,
    js_code_literal_key_only_key_is,
  );
  return key_only;
}
