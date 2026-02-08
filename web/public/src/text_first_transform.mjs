import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
export function text_first_transform(s, transform) {
  let split = string_split_empty(s);
  let r = list_first_remaining(split);
  let remaining = object_property_get(r, "remaining");
  let first = object_property_get(r, "first");
  let lower = transform(first);
  let joined = list_join_empty(remaining);
  let v = "" + lower + joined;
  return v;
}
