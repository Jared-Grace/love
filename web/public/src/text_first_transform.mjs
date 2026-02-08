import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function text_first_transform(s, transform) {
  let split = text_split_empty(s);
  let r = list_first_remaining(split);
  let remaining = object_property_get(r, "remaining");
  let function_copy_replace_first = object_property_get(r, "first");
  let lower = transform(function_copy_replace_first);
  let joined = list_join_empty(remaining);
  let v = "" + lower + joined;
  return v;
}
