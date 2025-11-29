import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function html_data_set_json(component, property_name, object) {
  let json = json_to(object);
  html_data_set(component, property_name, json);
}
