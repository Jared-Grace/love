import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_hint_nodes } from "./qa_gate_hint_nodes.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_includes } from "./list_includes.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gate_said_plain_is(f_name) {
  "Whether one gate, when it fails, spells a function's name somewhere a reader scraping the failure will take as an accusation. Read-only.";
  "Two things have to be true together. The gate has to do its own throwing - one that hands the whole complaint to a shared runner cannot leak, because whatever it passes along is the runner's to place, and the runner places it under a hint. And it has to spell a name that never reaches a hint of its own.";
  "The spelling is looked for as a call to the one function that exists to turn a name into a word, because that call is the only reason a gate ever has one: to say which command repairs this. A name reaching a hint is fine and is the whole point of a hint - the reader drops it before it looks.";
  "Necessary rather than sufficient, and said plainly here so nobody reads a pass as a promise. A name held in a variable rather than spelled - the function whose body was copied, say - is a leak this cannot see, and one path throwing a record does not stop another path throwing a sentence. It catches the shape that stopped three deployments in a day; it does not catch every shape.";
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  let spelling = fn_name("fn_name");
  let throwing_is = false;
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = property_get(callee, "name");
    let asserting_is = text_includes(called, "assert");
    if (asserting_is) {
      throwing_is = true;
    }
  }
  if (!throwing_is) {
    return false;
  }
  let hints = await qa_gate_hint_nodes(f_name);
  let hinted = await qa_gate_names_hinted(f_name);
  let declarators = await function_ast_list_type_nodes(
    f_name,
    "VariableDeclarator",
  );
  for (let call2 of calls) {
    let callee2 = property_get(call2, "callee");
    let called2 = property_get(callee2, "name");
    if (called2 !== spelling) {
      continue;
    }
    let start = property_get(call2, "start");
    let end = property_get(call2, "end");
    let inside_is = false;
    for (let hint of hints) {
      let hint_start = property_get(hint, "start");
      let hint_end = property_get(hint, "end");
      if (start >= hint_start && end <= hint_end) {
        inside_is = true;
      }
    }
    if (inside_is) {
      continue;
    }
    let held_is = false;
    for (let declarator of declarators) {
      let init = property_get(declarator, "init");
      if (init === null) {
        continue;
      }
      let init_start = property_get(init, "start");
      let init_end = property_get(init, "end");
      if (start < init_start || end > init_end) {
        continue;
      }
      let id = property_get(declarator, "id");
      let bound = property_get(id, "name");
      let bound_hinted_is = list_includes(hinted, bound);
      if (bound_hinted_is) {
        held_is = true;
      }
    }
    if (!held_is) {
      return true;
    }
  }
  return false;
}
