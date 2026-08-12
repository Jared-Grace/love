import { equal } from "./equal.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_gate_throws_own_is(f_name) {
  "Whether this gate words its own complaint, rather than handing what it found to a shared runner and letting that one do the saying. Read-only.";
  "It matters because only a gate that words its own complaint can word it badly. One that passes its offenders along has no say in how they are presented, so nothing it spells can arrive as an accusation - the runner puts what it was handed under a hint.";
  "Throwing shows up two ways here and both count: the language's own throw written out, and a call to one of the words this repo throws by. That is a short list of words rather than something worked out, and the cost of it being short is a gate that words its complaint some third way going unasked - which the record it is measured against would then have to be told about by hand.";
  let thrown = await function_ast_list_type_nodes(f_name, "ThrowStatement");
  let throwing_is = list_empty_not_is(thrown);
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = js_identifier_name_try(callee);
    if (equal(called, null)) {
      continue;
    }
    let asserting_is = text_includes_multiple_is(called, ["assert", "error"]);
    if (asserting_is) {
      throwing_is = true;
    }
  }
  return throwing_is;
}
