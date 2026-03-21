import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_code_property } from "../../../love/public/src/js_code_property.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function js_code_object(object) {
  let list = object_to_list(object);
  function lambda2(item) {
    let key = property_get(item, "key");
    let value = property_get(item, "value");
    let combined = js_code_property(key, value);
    return combined;
  }
  let mapped2 = list_map(list, lambda2);
  let v3 = list_join_comma_space(mapped2);
  let w = js_code_wrap_braces(v3);
  return w;
}
