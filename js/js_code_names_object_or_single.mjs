import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
export function js_code_names_object_or_single(names) {
  "One name on its own, several gathered into braces. The same text works as what";
  "a function hands back and as what the caller takes apart, so the two ends of an";
  "extraction are written once and cannot drift from each other.";
  let single = list_size_1(names);
  if (single) {
    let only = list_first(names);
    return only;
  }
  let joined = list_join_comma_space(names);
  let braced = js_code_wrap_braces(joined);
  return braced;
}
