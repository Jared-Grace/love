import { js_declare_single_is_if } from "../../../love/public/src/js_declare_single_is_if.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declare_single_identifier_is_if(lambda4, previous) {
  function lambda(d) {
    let id = property_get(d, "id");
    function lambda3() {
      lambda4(d);
    }
    js_identifier_is_if(id, lambda3);
  }
  js_declare_single_is_if(previous, lambda);
}
