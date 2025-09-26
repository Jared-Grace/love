import { object_property_get } from "./object_property_get.mjs";
export function reply_on_match(wrapped_fn, on_match) {
  let fn = function reply_on_match_inner(a) {
    let matches = wrapped_fn(a);
    if (matches) {
      let outputs = object_property_get(a, "outputs");
    }
  };
  return fn;
}
