import { js_find_return } from "./js_find_return.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { js_node_word_try } from "./js_node_word_try.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_function_word_returned_try(ast) {
  "The written word a function hands back, and nothing at all when what it hands back is not one. Read-only, pure.";
  "Asked by a reading that has arrived at a name and needs the word behind it. A word that has already left this repo - a key on somebody's disk, a word in an address people have kept - is spelled in one place on purpose, and every user of it then says the name rather than the word. A reading that stops at the call site therefore sees a call and learns nothing, and the word it was watching reads as gone while it is still spelled, plainly, one file away.";
  "Two shapes, because a one-word function is written both ways here: the word handed back where it stands, and the word set on the line above and handed back by name. Either may be wearing the marker that says it is frozen, which is what the node reading beside this one sees through.";
  "One step, like the reading of a name it sits beside: a word set from a name set from a name reads here as coming from nowhere, which is the safe way for a reading like this to be wrong.";
  let node = js_find_return(ast);
  let returned = js_return_argument_get(node);
  let name = js_identifier_name_try(returned);
  let named = not_equal(name, null);
  if (named) {
    let source = js_name_set_from_node_try(ast, name);
    let word = js_node_word_try(source);
    return word;
  }
  let word2 = js_node_word_try(returned);
  return word2;
}
