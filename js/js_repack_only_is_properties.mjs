import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_few_is } from "./js_repack_only_is_few_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_repack_only_is_properties(answer) {
  arguments_assert(arguments, 1);
  let r3 = js_repack_only_is_few_is(answer);
  let few_is = property_get(r3, "few_is");
  let properties = property_get(r3, "properties");
  let r = {
    few_is,
    properties,
  };
  return r;
}
