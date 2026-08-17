import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_all_equal_to } from "./list_all_equal_to.mjs";
export function js_function_forwarding_removed_agreed_is(node, sizes) {
  arguments_assert(arguments, 2);
  let params = property_get(node, "params");
  let wanted = list_size(params);
  let agreed_is = list_all_equal_to(sizes, wanted);
  return agreed_is;
}
