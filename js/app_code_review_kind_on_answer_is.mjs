import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_code_review_kind_on_answer_is(kind, on_answer) {
  "whether a lesson's quiz kind is answered by this function. The function itself is compared, never its name, because a built page may shorten names";
  let info = property_get(kind, "info");
  let actual = property_get_or_null(info, "on_answer");
  let same = equal(actual, on_answer);
  return same;
}
