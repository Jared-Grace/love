import { property_list_first } from "./property_list_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_throws_own_is } from "./qa_gate_throws_own_is.mjs";
import { not } from "./not.mjs";
import { qa_gate_hint_depth } from "./qa_gate_hint_depth.mjs";
import { qa_gate_hint_nodes } from "./qa_gate_hint_nodes.mjs";
import { qa_gate_prose_nodes } from "./qa_gate_prose_nodes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { qa_gate_accused_nodes } from "./qa_gate_accused_nodes.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
import { qa_gate_names_accused } from "./qa_gate_names_accused.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_node_inside_any_is } from "./js_node_inside_any_is.mjs";
import { qa_gate_declarator_holding } from "./qa_gate_declarator_holding.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export async function qa_gate_said_plain_leaked(f_name) {
  "Which names one gate spells out that will be read as an accusation when it fails, and for each one the local it was kept in. Read-only.";
  "THE GATE NEXT DOOR ANSWERS YES OR NO, AND YES IS NOT ENOUGH TO ACT ON. A gate named as speaking badly spells several names, most of them placed perfectly well, and whoever has to put it right is left reading the whole body to work out which one is the fault. That reading is the same reading every time, so it is done here once.";
  "The question asked of each spelling is the same one asked next door, and the answer is arrived at the same way, so that a name shown here is a name that would be counted there.";
  "A gate that hands its whole complaint to a shared runner leaks nothing whatever it spells, so it comes back with nothing rather than with its spellings marked safe.";
  arguments_assert(arguments, 1);
  let leaked = [];
  let throwing_is = await qa_gate_throws_own_is(f_name);
  if (not(throwing_is)) {
    return leaked;
  }
  let depth = qa_gate_hint_depth();
  let remembered = {};
  let hints = await qa_gate_hint_nodes(f_name, remembered, depth);
  let prose = await qa_gate_prose_nodes(f_name);
  list_add_multiple(hints, prose);
  let accused_nodes = await qa_gate_accused_nodes(f_name);
  list_add_multiple(hints, accused_nodes);
  let hinted = await qa_gate_names_hinted(f_name, remembered, depth);
  let accused = await qa_gate_names_accused(f_name);
  let spelling = fn_name("fn_name");
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  let declarators = await function_ast_list_type_nodes(
    f_name,
    "VariableDeclarator",
  );
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = js_identifier_name_try(callee);
    if (not_equal(called, spelling)) {
      continue;
    }
    let inside_is = js_node_inside_any_is(call, hints);
    if (inside_is) {
      continue;
    }
    let bound = qa_gate_declarator_holding(call, declarators);
    let first = property_list_first(call, "arguments");
    let spelled = js_literal_value_try(first);
    if (equal(bound, null)) {
      list_add(leaked, {
        spelled,
        bound,
      });
      continue;
    }
    let bound_placed_is = list_includes(hinted, bound);
    if (not(bound_placed_is)) {
      bound_placed_is = list_includes(accused, bound);
    }
    if (not(bound_placed_is)) {
      list_add(leaked, {
        spelled,
        bound,
      });
    }
  }
  return leaked;
}
