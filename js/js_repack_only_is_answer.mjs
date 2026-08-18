import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_unfound_is } from "./js_repack_only_is_unfound_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_repack_only_is_answer(node, declaration) {
  arguments_assert(arguments, 2);
  let r = js_repack_only_is_unfound_is(node, declaration);
  let unfound_is = property_get(r, "unfound_is");
  let answer = property_get(r, "answer");
  let r2 = {
    unfound_is,
    answer,
  };
  return r2;
}
