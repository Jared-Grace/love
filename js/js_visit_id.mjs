import { js_visit_id_try } from "./js_visit_id_try.mjs";
import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
export function js_visit_id(ast, target) {
  let id = js_visit_id_try(ast, target);
  integer_is_assert_json(id, {
    hint: "the target node should have been found and given an id — was the target actually present in the ast?",
  });
  return id;
}
