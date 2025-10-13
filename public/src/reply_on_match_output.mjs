import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_on_match_output(item) {
  let v2 = function lambda(a) {
    let outputs = object_property_get(a, "outputs");
    list_add(outputs, item);
  };
  return v2;
}
