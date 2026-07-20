import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";

// A case may declare `reason_includes` to pin the guidance text the guard
// hands back, not just its verdict — that text is how a reader learns the
// right move, so it is worth protecting from silent decay. Returns "" when
// the case makes no such claim or the claim holds, else what went wrong.
export function guard_case_reason_note(c, result) {
  if (!property_exists(c, "reason_includes")) {
    return "";
  }
  let needle = property_get(c, "reason_includes");
  if (!property_exists(result, "reason")) {
    return "expected reason to include " + JSON.stringify(needle) + ", got no reason";
  }
  let reason = property_get(result, "reason");
  if (text_includes(reason, needle)) {
    return "";
  }
  return "reason missing " + JSON.stringify(needle);
}
