import { each_object } from "../../../love/public/src/each_object.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
export function html_data_set_object(component, object) {
  function lambda2(value, property) {
    html_data_set(component, property, value);
  }
  each_object(object, lambda2);
}
