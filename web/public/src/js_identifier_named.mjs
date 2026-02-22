import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
export function js_identifier_named(i, identifier_name) {
  let r = js_identifier_name(i) === identifier_name;
  return r;
}
