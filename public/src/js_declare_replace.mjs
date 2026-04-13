import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
export function js_declare_replace(declare_variable_name, init, replace_into) {
  let declare = js_declare(declare_variable_name, init);
  object_replace(replace_into, declare);
}
