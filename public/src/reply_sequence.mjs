import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { function_is } from "../../../love/public/src/function_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function reply_sequence(sequence_fns) {
  let fn = function reply_sequence_matches(possibilities) {
    list_is_assert(possibilities);
    let tokens = object_property_get(p, "tokens");
    function lambda(sequence_fn) {
      let fi = function_is(sequence_fn);
      if (not(fi)) {
        sequence_fn = function reply_wrap_inner(possibilities) {
          function lambda2(p) {
            let index_start = object_property_get(p, "index");
            let token = list_get(tokens, index_start);
            let matches = sequence_fn === token;
            let r = {
              matches,
              index: index_start + 1,
            };
            object_assign(p, r);
          }
          each(possibilities, lambda2);
        };
        let p = sequence_fn(p);
      }
    }
    each(sequence_fns, lambda);
  };
  return fn;
}
