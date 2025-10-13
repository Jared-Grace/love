import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_on_match_output(fn_a, item) {
  assert_arguments(arguments, 2);
  function lambda(a) {
    let outputs = object_property_get(a, "outputs");
    list_add(outputs, item);
  }
  let fn = reply_on_match(fn_a, lambda);
  return fn;
}
