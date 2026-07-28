import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { property_get } from "./property_get.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { equal } from "./equal.mjs";
import { js_string_site_label } from "./js_string_site_label.mjs";
export function js_string_site_labels(ast, text) {
  arguments_assert(arguments, 2);
  ("Every job a given written word is doing in one file, said in a word each. What");
  ("a report of repeated spellings needs and has never carried: the same spelling");
  ("in two files is evidence of nothing until you know that both are naming the");
  ("same thing.");
  function lambda_add(label_add) {
    function lambda(v) {
      let node = property_get(v, "node");
      let held = js_literal_value_get(node);
      let same = equal(held, text);
      if (same) {
        let stack = property_get(v, "stack");
        let label = js_string_site_label(stack);
        label_add(label);
      }
    }
    js_visit_types(ast, ["Literal"], lambda);
  }
  let labels = list_adder_unique(lambda_add);
  return labels;
}
