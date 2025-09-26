import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function reply_on_match(wrapped_fn, on_match) {
  let fn = async function reply_on_match_inner(a) {
    let matches = wrapped_fn(a);
    if (matches) {
      let outputs = object_property_get(a, "outputs");
      list_add(outputs, await on_match());
    }
  };
  return fn;
}
