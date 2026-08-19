import { property_list_size } from "./property_list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_all_equal_to } from "./list_all_equal_to.mjs";
export function js_function_forwarding_removed_agreed_is(node, sizes) {
  arguments_assert(arguments, 2);
  let wanted = property_list_size(node, "params");
  let agreed_is = list_all_equal_to(sizes, wanted);
  return agreed_is;
}
