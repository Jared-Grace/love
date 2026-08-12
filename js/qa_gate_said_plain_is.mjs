import { qa_gate_prose_nodes } from "./qa_gate_prose_nodes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { qa_gate_hint_depth } from "./qa_gate_hint_depth.mjs";
import { qa_gate_throws_own_is } from "./qa_gate_throws_own_is.mjs";
import { js_node_inside_any_is } from "./js_node_inside_any_is.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_hint_nodes } from "./qa_gate_hint_nodes.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
import { qa_gate_declarator_holding } from "./qa_gate_declarator_holding.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gate_said_plain_is(f_name) {
  "Whether one gate, when it fails, spells a function's name somewhere a reader scraping the failure will take as an accusation. Read-only.";
  "Two things have to be true together. The gate has to do its own throwing - one that hands the whole complaint to a shared runner cannot leak, because whatever it passes along is the runner's to place, and the runner places it under a hint. And it has to spell a name that never reaches a hint of its own.";
  "The spelling is looked for as a call to the one function that exists to turn a name into a word, because that call is the only reason a gate ever has one: to say which command repairs this. A name reaching a hint is fine and is the whole point of a hint - the reader drops it before it looks.";
  "A function's own paragraphs are held alongside the hints and count the same way, because neither is ever said out loud. Prose is not printed and not thrown, so a name spelled in it reaches nobody - and a gate that explains itself by naming what it checks was being called a leak for explaining itself.";
  "Two ways of reaching a hint both count. The spelling can sit inside one, and it can be kept in a local that a hint is later built out of - the second is the commoner of the two, because a canonicalized file lifts almost everything into a local first.";
  "Necessary rather than sufficient, and said plainly here so nobody reads a pass as a promise. A name held in a variable rather than spelled - the function whose body was copied, say - is a leak this cannot see, and one path throwing a record does not stop another path throwing a sentence. It catches the shape that stopped three deployments in a day; it does not catch every shape.";
  let throwing_is = await qa_gate_throws_own_is(f_name);
  if (not(throwing_is)) {
    return false;
  }
  let depth = qa_gate_hint_depth();
  let remembered = {};
  let hints = await qa_gate_hint_nodes(f_name, remembered, depth);
  let prose = await qa_gate_prose_nodes(f_name);
  list_add_multiple(hints, prose);
  let hinted = await qa_gate_names_hinted(f_name, remembered, depth);
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
    if (equal(bound, null)) {
      return true;
    }
    let bound_hinted_is = list_includes(hinted, bound);
    if (not(bound_hinted_is)) {
      return true;
    }
  }
  return false;
}
