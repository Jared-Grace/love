import { js_math_calls_usable } from "./js_math_calls_usable.mjs";
import { js_math_call_member_try } from "./js_math_call_member_try.mjs";
import { js_math_node_to_call } from "./js_math_node_to_call.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function js_math_calls_rewrite(ast) {
  "Point every call to a covered Math method in this file at the function standing for it, and stop there - the imports those calls now want are somebody else's step.";
  "Split from that step because this half needs nothing but the tree. What the repo calls things has to be read off every folder beside this one before an import can be written, so a proof that the rewriting is right could not be run without the whole machine around it; this half can be handed a written-out file and checked on its own.";
  let usable = js_math_calls_usable(ast);
  function lambda(node) {
    let member = js_math_call_member_try(node);
    if (not(member)) {
      return;
    }
    let matches = list_filter_property(usable, "member", member);
    function lambda_apply(o) {
      js_math_node_to_call(node, o);
    }
    each(matches, lambda_apply);
  }
  js_visit_type_node(ast, "CallExpression", lambda);
  return usable;
}
