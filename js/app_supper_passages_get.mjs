import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_supper_passages_get(verses) {
  function lambda2(la) {
    let group = null;
    let previous = null;
    function flush() {
      let exists = null_not_is(group);
      if (exists) {
        la(group);
      }
    }
    function lambda(v) {
      let chapter_code = property_get(v, "chapter_code");
      let changed = equal_not(chapter_code, previous);
      if (changed) {
        flush();
        group = [];
      }
      list_add(group, v);
      previous = chapter_code;
    }
    each(verses, lambda);
    flush();
  }
  let passages = list_adder(lambda2);
  return passages;
}
