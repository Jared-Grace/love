import { property_equals } from "./property_equals.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_calls_named_sized(ast, f_name, count) {
  arguments_assert(arguments, 3);
  ("Every call in this file to one imported name that hands over exactly this many");
  ("things.");
  ("How many a call hands over is what tells two callers of the same name apart");
  ("when only one of them is wrong. A helper that quietly drops what it is given");
  ("has correct callers and mistaken ones side by side in the same repo, and the");
  ("count is the only thing standing between them.");
  ("Only imported names, and never one the file also binds itself, for the same");
  ("reason the arity sweep skips them: the call in front of the reader reaches the");
  ("local, so pointing it somewhere else would move a call that was never about");
  ("the imported function at all.");
  ("The count is read back from text before anything is compared with it. A");
  ("command line hands every argument over as text, and the comparison here is the");
  ("strict one - so a count spelled on a command line would match nothing at all");
  ("and answer with an empty list, which reads exactly like a repo that has none.");
  let wanted = number_from_text(count);
  let imported = js_imports_local_names(ast);
  let bound = js_binding_names(ast);
  let brought_in = list_includes(imported, f_name);
  let own = list_includes(bound, f_name);
  let calls = [];
  if (not(brought_in)) {
    return calls;
  }
  if (own) {
    return calls;
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let named = property_equals(callee, "name", f_name);
    if (not(named)) {
      return;
    }
    let args = property_get(node, "arguments");
    let size = list_size(args);
    let sized = equal(size, wanted);
    if (not(sized)) {
      return;
    }
    list_add(calls, node);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return calls;
}
