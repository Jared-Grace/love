import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_a_node_index } from "./app_a_node_index.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_at_count } from "./list_remove_at_count.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
export async function app_a_identifier_generic_choices_get_lambda23(
  input,
  a,
  o,
) {
  arguments_assert(arguments, 3);
  let value_new = html_value_get(input);
  let v = app_a_node_index(a);
  let index = property_get(v, "index");
  let list = property_get(v, "list");
  list_remove_at_count(list, index, value_new);
  await app_a_function_on_change(a, o);
}
