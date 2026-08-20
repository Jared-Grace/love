import { qa_gate_miscounted_keys_name_add } from "./qa_gate_miscounted_keys_name_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { number_is } from "./number_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { js_ast_declarator_init_named } from "./js_ast_declarator_init_named.mjs";
import { equal } from "./equal.mjs";
import { qa_gate_count_fixed_is } from "./qa_gate_count_fixed_is.mjs";
import { qa_gate_count_hollow_is } from "./qa_gate_count_hollow_is.mjs";
export async function qa_gate_miscounted_keys_property(
  properties,
  words,
  f_name,
  names,
  asserted,
  ast,
) {
  arguments_assert(arguments, 6);
  for (let property of properties) {
    let key = qa_gate_population_key_try(property, words);
    let promised_is = null_not_is(key);
    if (not(promised_is)) {
      continue;
    }
    let value = property_get(property, "value");
    let written_is = js_node_type_is(value, "Literal");
    if (written_is) {
      let spelled = js_literal_value_get(value);
      let counted_is = number_is(spelled);
      if (counted_is) {
        qa_gate_miscounted_keys_name_add(names, f_name, key);
      }
      continue;
    }
    let field = js_identifier_name_try(value);
    let field_named_is = null_not_is(field);
    if (field_named_is) {
      let refused_is = list_includes(asserted, field);
      if (refused_is) {
        qa_gate_miscounted_keys_name_add(names, f_name, key);
        continue;
      }
      value = js_ast_declarator_init_named(ast, field);
      let outside_is = equal(value, null);
      if (outside_is) {
        continue;
      }
    }
    let fixed_is = await qa_gate_count_fixed_is(ast, value);
    if (fixed_is) {
      let pair = text_combine_multiple([f_name, " ", key]);
      list_add(names, pair);
      continue;
    }
    let hollow_is = qa_gate_count_hollow_is(value, asserted);
    if (hollow_is) {
      let pair = text_combine_multiple([f_name, " ", key]);
      list_add(names, pair);
    }
  }
}
