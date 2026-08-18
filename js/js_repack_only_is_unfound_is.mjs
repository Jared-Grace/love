import { arguments_assert } from "./arguments_assert.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_repack_only_is_unfound_is(node, declaration) {
  arguments_assert(arguments, 2);
  let answer = js_return_argument_get(node);
  let named = js_identifier_name_try(answer);
  let bound_is = null_not_is(named);
  if (bound_is) {
    answer = js_name_set_from_node_try(declaration, named);
  }
  let unfound_is = null_is(answer);
  let r = {
    answer,
    unfound_is,
  };
  return r;
}
