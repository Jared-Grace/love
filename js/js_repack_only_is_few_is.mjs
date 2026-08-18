import { arguments_assert } from "./arguments_assert.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
export function js_repack_only_is_few_is(answer) {
  arguments_assert(arguments, 1);
  let properties = js_object_expression_properties(answer);
  let few_is = list_size_less_than_value(properties, 2);
  let r = {
    properties,
    few_is,
  };
  return r;
}
