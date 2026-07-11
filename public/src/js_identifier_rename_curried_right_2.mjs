import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
export function js_identifier_rename_curried_right_2(name_from, name_to) {
  let r2 = function js_identifier_rename_curried_right_2_result(ast) {
    let r = js_identifier_rename(ast, name_from, name_to);
    return r;
  };
  return r2;
}
