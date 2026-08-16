import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
export function functions_fold_shape_of(f_name, shapes, entries) {
  arguments_assert(arguments, 3);
  let kept = shapes[f_name];
  if (not_equal(kept, undefined)) {
    return kept;
  }
  let text2 = property_get(entries, f_name).text;
  let read = js_parse(text2);
  shapes[f_name] = read;
  return read;
}
