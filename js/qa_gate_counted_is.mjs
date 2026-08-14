import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { qa_gate_asserted_empty_names } from "./qa_gate_asserted_empty_names.mjs";
import { qa_gate_count_hollow_is } from "./qa_gate_count_hollow_is.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function qa_gate_counted_is(f_name, depth) {
  "Whether what a gate hands back carries a number that still means something on a run that passes - how much it reached, rather than how much was wrong with it.";
  "A gate that passes by finding nothing and a gate whose reading has quietly stopped reaching anything say exactly the same word, and the only thing that can tell them apart is a count of what was walked travelling out with the verdict. Without one, a sweep can be pointed at an index that has been renamed, or at a folder that has moved, and go on answering clean forever - and the whole of what it was watching is then unwatched, silently, from the day the reading broke.";
  "The offenders are not that number. Their count is nothing on every green run by construction, so an answer holding only them, or only a length worked out from them, has nothing in it that could ever fall. That was found in this repo rather than imagined: a gate reported how much it had checked and the amount it reported was the number of things wrong, so a clean run said nothing checked.";
  "A gate handing its whole complaint to a shared way of running one is followed into it, because the number, if there is one, is that one's to report. The following is bounded rather than open, and the bound is a plain guess at how deep these ever go - a chain longer than that is called uncounted, which is the safe way round: it asks a person to look rather than promising them something was measured.";
  "A number written down in the answer is not a reading either. Two of the ratchets hand back a nought spelled out, which is true of them and says nothing about whether their sweep reached anything.";
  "What this cannot see: a count that reaches the answer under a name this file cannot follow back - through a parameter, or out of something imported. Those read as counted, which is the direction that lets somebody through rather than the one that stops them, and is on purpose: this exists to name gates worth looking at, not to accuse them.";
  arguments_assert(arguments, 2);
  let spent_is = equal(depth, 0);
  if (spent_is) {
    return false;
  }
  let ast = await function_ast(f_name);
  let returns = js_list_type_nodes(ast, "ReturnStatement");
  let silent_is = list_empty_is(returns);
  if (silent_is) {
    return false;
  }
  let statement = list_last(returns);
  let answer = js_return_argument_get(statement);
  let empty_is = equal(answer, null);
  if (empty_is) {
    return false;
  }
  ("What the answer is called is the commoner shape by far, so the step from a name back to what fills it is taken first and everything after it reads the value itself.");
  let named = js_identifier_name_try(answer);
  let bound_is = null_not_is(named);
  if (bound_is) {
    answer = js_ast_declarator_init_named(ast, named);
    let unfound_is = equal(answer, null);
    if (unfound_is) {
      return false;
    }
  }
  let waited_is = js_node_type_is(answer, "AwaitExpression");
  if (waited_is) {
    answer = property_get(answer, "argument");
  }
  let handed_is = js_node_type_is(answer, "CallExpression");
  if (handed_is) {
    let callee = property_get(answer, "callee");
    let called = js_identifier_name_try(callee);
    let reachable_is = null_not_is(called);
    if (not(reachable_is)) {
      return false;
    }
    let shallower = subtract(depth, 1);
    let counted = await qa_gate_counted_is(called, shallower);
    return counted;
  }
  let recorded_is = js_node_type_is(answer, "ObjectExpression");
  if (not(recorded_is)) {
    return false;
  }
  let asserted = qa_gate_asserted_empty_names(ast);
  let properties = property_get(answer, "properties");
  for (let property of properties) {
    let plain_is = js_node_type_is(property, "Property");
    if (not(plain_is)) {
      continue;
    }
    let value = property_get(property, "value");
    let written_is = js_node_type_is(value, "Literal");
    if (written_is) {
      continue;
    }
    let field = js_identifier_name_try(value);
    let field_named_is = null_not_is(field);
    if (field_named_is) {
      let refused_is = list_includes(asserted, field);
      if (refused_is) {
        continue;
      }
      let filled = js_ast_declarator_init_named(ast, field);
      let outside_is = equal(filled, null);
      if (outside_is) {
        return true;
      }
      let hollow_is = qa_gate_count_hollow_is(filled, asserted);
      if (hollow_is) {
        continue;
      }
      return true;
    }
    let worked_hollow_is = qa_gate_count_hollow_is(value, asserted);
    if (worked_hollow_is) {
      continue;
    }
    return true;
  }
  return false;
}
