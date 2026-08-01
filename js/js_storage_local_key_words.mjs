import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
export function js_storage_local_key_words(ast, seams) {
  "Every word this file writes into a key in somebody's browser storage, read off the calls that do the writing. Read-only, pure.";
  "A stored key here is the owning function's name with a word after it. The name half is watched already, because a rename moves it and a rename is a command anybody may run. This is the other half, and it moves for a different reason: somebody reads the line, thinks of a better word for the setting, and types it. The line still compiles, every gate over code stays green, and every reader from then on looks under a key nothing was ever written to.";
  "Only a word written out is collected. A word spelled as a reference to a function is that function's name, which the record of published names already holds, and counting it twice would make a rename fail two gates saying the same thing.";
  "Which calls to read is handed in, the same list the name reading is given, so a word written at a front door is reached where it is actually written rather than where it is finally stored.";
  arguments_assert(arguments, 2);
  let found = [];
  function collect(node) {
    let word_node = js_call_argument_at_try(node, "2");
    let absent = equal(word_node, null);
    if (absent) {
      return;
    }
    let written = js_literal_is(word_node);
    if (written) {
      let word = js_literal_value_get(word_node);
      list_add(found, word);
    }
  }
  for (let seam of seams) {
    js_visit_calls_named_nodes(ast, seam, collect);
  }
  let unique = list_unique(found);
  unique.sort();
  return unique;
}
