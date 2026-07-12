import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_declare_single_is_if } from "./js_declare_single_is_if.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { property_get } from "./property_get.mjs";
export function js_declare_single_identifier_is_if(node, lambda$init$id) {
  function lambda(d) {
    let id = property_get(d, "id");
    function lambda3() {
      let init = js_declare_init_get(d);
      lambda$init$id(init, id);
    }
    js_identifier_is_if(id, lambda3);
  }
  js_declare_single_is_if(node, lambda);
}
