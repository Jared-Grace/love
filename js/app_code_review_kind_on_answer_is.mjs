import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_kind_on_answer_is(kind, on_answer) {
  "whether a lesson's quiz kind is answered by this function. The function itself is compared, never its name, because a built page may shorten names";
  let info = property_get(kind, "info");
  let same = property_get_or_null_equal(info, "on_answer", on_answer);
  return same;
}
