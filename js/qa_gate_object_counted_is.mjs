import { null_not_is } from "./null_not_is.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_judged_list_names } from "./qa_gate_judged_list_names.mjs";
import { qa_gate_count_hollow_is } from "./qa_gate_count_hollow_is.mjs";
export function qa_gate_object_counted_is(ast, answer) {
  "Whether the record a gate hands back holds even one part that is a reading rather than a restatement of what it refused to find.";
  "One part is enough. A gate that says how much it walked has already given a reader the thing that falls when its sweep goes blind, and whatever else it says beside that is its own business.";
  "Three shapes are passed over as saying nothing. A number written out in the answer is true of the gate and says nothing about what it reached. A name the gate hands to an emptiness check is nothing on every run that passes. And a value worked out from nothing but those names is the same nothing with arithmetic on top - which is the shape that was actually found here, a gate reporting how much it had checked and reporting the number of things wrong with it.";
  "A name that no line here binds is called a reading. It came in as something asked for or out of something imported, and this file cannot follow it either way, so it is let through - which lets somebody past rather than accusing them, and that is the direction to be wrong in.";
  let asserted = qa_gate_judged_list_names(ast);
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
