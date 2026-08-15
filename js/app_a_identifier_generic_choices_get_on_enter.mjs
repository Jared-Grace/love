import { arguments_assert } from "./arguments_assert.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
export async function app_a_identifier_generic_choices_get_on_enter(
  input,
  change,
  a,
  o,
) {
  arguments_assert(arguments, 4);
  let value_new = html_value_get(input);
  let on_change = property_get(change, "on_change");
  await on_change(value_new);
  await app_a_function_on_change(a, o);
}
