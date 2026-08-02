import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { js_builtin_call_parts_spelling } from "./js_builtin_call_parts_spelling.mjs";
import { list_add } from "./list_add.mjs";
import { js_builtin_calls_usable } from "./js_builtin_calls_usable.mjs";
import { js_builtin_call_parts_try } from "./js_builtin_call_parts_try.mjs";
import { js_builtin_node_to_call } from "./js_builtin_node_to_call.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function js_builtin_calls_rewrite(ast) {
  "Point every call to a covered built-in method in this file at the function standing for it, and stop there - the imports those calls now want are somebody else's step.";
  "Split from that step because this half needs nothing but the tree. What the repo calls things has to be read off every folder beside this one before an import can be written, so a proof that the rewriting is right could not be run without the whole machine around it; this half can be handed a written-out file and checked on its own.";
  "What moved is handed back beside what could have. A sweep asks the first to know which files it changed and to prove afterwards that none are left; the import step asks the second, because a name it does not need is dropped there anyway and the wider answer costs nothing.";
  let usable = js_builtin_calls_usable(ast);
  let moved = [];
  function lambda(node) {
    let parts = js_builtin_call_parts_try(node);
    if (not(parts)) {
      return;
    }
    let matches = list_filter_object_includes(usable, parts);
    function lambda_apply(o) {
      let one = js_builtin_node_to_call(node, o);
      if (not(one)) {
        return;
      }
      let spelling = js_builtin_call_parts_spelling(parts);
      list_add(moved, spelling);
    }
    each(matches, lambda_apply);
  }
  js_visit_type_node(ast, "CallExpression", lambda);
  let r = {
    usable,
    moved,
  };
  return r;
}
