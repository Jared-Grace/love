import { marker } from "../../../love/public/src/marker.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function html_on_enter_lambda(lambda) {
  marker("1");
  let v3 = function html_on_enter_lambda_inner(e) {
    let k = object_property_get(e, "key");
    if (equal(k, "Enter")) {
      lambda();
    }
  };
  return v3;
}
