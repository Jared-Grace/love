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
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
export async function qa_gate_said_plain_is(f_name) {
  "Whether one gate, when it fails, spells a function's name somewhere a reader scraping the failure will take as an accusation of something not at fault. Read-only.";
  "Two things have to be true together. The gate has to do its own throwing - one that hands the whole complaint to a shared runner cannot leak, because whatever it passes along is the runner's to place, and the runner places it under a hint. And it has to spell a name that reaches neither a hint nor the thrown list of offenders.";
  "The spelling is looked for as a call to the one function that exists to turn a name into a word, because that call is how a gate names something it does not otherwise touch: usually the command that repairs the fault, sometimes the very thing it is checking.";
  "A name reaching a hint is fine and is the whole point of a hint - the reader drops it before it looks. A name reaching the thrown list of offenders is fine for the opposite reason: that list is the accusation, so a name in it is being accused on purpose.";
  "IT READ THE HINT SLOT ONLY, AND THAT WAS ENOUGH FOR EVERY GATE THAT SPELLED A NAME WHEN IT WAS WRITTEN. Each of them spelled one to say which command repairs the fault, and a repair command is never at fault. Then a gate arrived that spells the names it is checking - the four doors a translation's text leaves by - and throws the ones that stopped reaching the commercial check as its offenders. Holding back an app that ships a door which no longer asks that question is exactly what the reader should do with those names, so the gate was calling correct behaviour a leak. The words this gate fails with had said so all along: throw the offenders, put the advice and any bystanders under the hint. Only one of those two slots was being read.";
  "A function's own paragraphs are held alongside the hints and count the same way, because neither is ever said out loud. Prose is not printed and not thrown, so a name spelled in it reaches nobody - and a gate that explains itself by naming what it checks was being called a leak for explaining itself.";
  "Two ways of reaching a slot both count. The spelling can sit inside one, and it can be kept in a local that a slot is later filled out of - the second is the commoner of the two, because a canonicalized file lifts almost everything into a local first.";
  "Necessary rather than sufficient, and said plainly here so nobody reads a pass as a promise. A name held in a variable rather than spelled - the function whose body was copied, say - is a leak this cannot see, and one path throwing a record does not stop another path throwing a sentence. A name put in the thrown list that does not belong there is a wrong accusation rather than a leak, and is not this one's question either. It catches the shape that stopped three deployments in a day; it does not catch every shape.";
  let throwing_is = await qa_gate_throws_own_is(f_name);
  if (not(throwing_is)) {
    return false;
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
    if (equal(bound, null)) {
      return true;
    }
    let bound_placed_is = list_includes(hinted, bound);
    if (not(bound_placed_is)) {
      bound_placed_is = list_includes(accused, bound);
    }
    if (not(bound_placed_is)) {
      return true;
    }
  }
  return false;
}
