import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_return_try } from "./js_find_return_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_repack_only_is_silent_is(declaration) {
  arguments_assert(arguments, 1);
  let node = js_find_return_try(declaration);
  let silent_is = null_is(node);
  let r = {
    node,
    silent_is,
  };
  return r;
}
