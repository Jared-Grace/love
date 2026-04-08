import { js_visit_id_try } from "../../../love/public/src/js_visit_id_try.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
export function js_visit_id(ast, target) {
  let id = js_visit_id_try(ast, target);
  integer_is_assert(id);
  return id;
}
