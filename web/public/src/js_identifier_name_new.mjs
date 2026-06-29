import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
export function js_identifier_name_new(ast, name_from, name_to) {
  let r = js_identifier_rename(ast, name_from, name_to);
  return r;
}
