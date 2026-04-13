import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
export function js_declare_replace(name_function, c, node) {
  let declare = js_declare(name_function, c);
  object_replace(node, declare);
}
