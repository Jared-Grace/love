import { js_dot_name_object_name_try } from "./js_dot_name_object_name_try.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_argument_at } from "./js_call_argument_at.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { list_add } from "./list_add.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function js_storage_local_key_f_names(ast, seams) {
  "Every function name this file writes into a key in somebody's browser storage, read off the calls that do the writing. Read-only, pure.";
  "A stored key here is a function's own name with a word after it. The first thing the storing is handed is the function the setting belongs to, and its name is joined to the word to make the key the browser looks under - so the name is not only a name any more, it is published, and it is sitting on disks this repo will never see again.";
  "That makes renaming one of them the one rename that is not behaviour-preserving. Every other reference follows, the file loads, every caller compiles, and every reader from then on looks under a key nothing was ever written to - the person's saved setting is still there, under the old name, unreachable. A rename is auto-approved, so nothing today stands between that and a commit.";
  "Both places a name reaches a key are collected. It is usually the function handed in first; where the word after it is spelled as a reference rather than written out, that name is published too and follows a rename exactly the same way.";
  "There are two ways to spell that reference and both are read, because a file may use either and one of the two was invisible here until a function turned out to be publishing its own name by the spelling nothing was watching.";
  "Which calls to read is not decided here, and is handed in. It was three names written out in this file until a fourth and a fifth were found sitting beside them, and a sixth kind arrived later still - the front doors that pass a key word straight through, which have to be read at their callers because that is where the word is written. Only the caller that walks the repo can know which those are, so this asks.";
  "A name is collected as written, without asking whether it is a function at all - the caller that walks the repo is the one holding the list of live names, and a word standing here that answers to nothing is a parameter, which is a real hole and cannot be closed from inside one file.";
  arguments_assert(arguments, 2);
  let spelled = fn_name("fn_name");
  let found = [];
  function collect(node) {
    let owner_node = js_call_argument_at(node, "1");
    let owner = js_identifier_name_try(owner_node);
    let named = not_equal(owner, null);
    if (named) {
      list_add(found, owner);
    }
    let word_node = js_call_argument_at(node, "2");
    let callee = js_call_callee_name_try(word_node);
    let by_reference = equal(callee, spelled);
    if (by_reference) {
      let inner = js_call_argument_at(word_node, "1");
      let word = property_get(inner, "value");
      list_add(found, word);
    }
    let dotted = js_dot_name_object_name_try(word_node);
    let by_dot = not_equal(dotted, null);
    if (by_dot) {
      list_add(found, dotted);
    }
  }
  for (let seam of seams) {
    js_visit_calls_named_nodes(ast, seam, collect);
  }
  let unique = list_unique(found);
  unique.sort();
  return unique;
}
