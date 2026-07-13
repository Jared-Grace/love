import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_string_maximal_fn_name_is(value, fn_names) {
  let segments = text_identifier_segments(value);
  let s1 = list_size_1(segments);
  if (not(s1)) {
    return false;
  }
  let segment = list_first(segments);
  let identifier = property_get(segment, "identifier");
  if (not(identifier)) {
    return false;
  }
  let underscore = text_includes(value, "_");
  if (not(underscore)) {
    return false;
  }
  let is_fn = list_includes(fn_names, value);
  return is_fn;
}
