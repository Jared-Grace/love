import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_exists } from "./function_exists.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_answer_node_try } from "./qa_gate_answer_node_try.mjs";
export async function qa_gate_count_fixed_is(ast, node) {
  "Whether a number a gate reports is the size of a list written into the source - the same number on the run that read everything and on the run that read nothing.";
  "The hollow check beside this one asks whether a count is worked out from the very lists the gate refuses to have anything in. This asks the other way a count can be dead: it is honestly the size of something, and that something is spelled out in the code rather than gathered by the reading. Both answer the same on every run, and the reason a reader is fooled is the same - a number appears beside a word promising the looking, so nobody opens the file.";
  "Found rather than imagined. A gate said it had checked sixteen for as long as it existed, and sixteen was how many names the auto pass writes, not how many files it had opened. It would have said sixteen with its sweep pointed at a folder that no longer exists.";
  "The list is followed one step out of the gate and no further. A name here can be bound straight to a written list, or bound to the answer of a function whose whole body is one - and that second shape is the commoner one, because a set worth naming gets a name of its own. A longer chain than that is called honest, which lets somebody past rather than accusing them.";
  arguments_assert(arguments, 2);
  let sized_is = js_node_type_is(node, "MemberExpression");
  if (not(sized_is)) {
    return false;
  }
  let property = property_get(node, "property");
  let asked = js_identifier_name_try(property);
  let length_is = equal(asked, "length");
  if (not(length_is)) {
    return false;
  }
  let object = property_get(node, "object");
  let named = js_identifier_name_try(object);
  let bound_is = null_not_is(named);
  if (not(bound_is)) {
    return false;
  }
  let init = js_ast_declarator_init_named(ast, named);
  let unfound_is = equal(init, null);
  if (unfound_is) {
    return false;
  }
  let written_is = js_node_type_is(init, "ArrayExpression");
  if (written_is) {
    return true;
  }
  let call_is = js_node_type_is(init, "CallExpression");
  if (not(call_is)) {
    return false;
  }
  let callee = property_get(init, "callee");
  let called = js_identifier_name_try(callee);
  let reachable_is = null_not_is(called);
  if (not(reachable_is)) {
    return false;
  }
  let looked = await function_exists(called);
  let known_is = property_get(looked, "exists");
  if (not(known_is)) {
    return false;
  }
  let told = await function_ast(called);
  let answer = qa_gate_answer_node_try(told);
  let unreadable_is = equal(answer, null);
  if (unreadable_is) {
    return false;
  }
  let listed_is = js_node_type_is(answer, "ArrayExpression");
  return listed_is;
}
