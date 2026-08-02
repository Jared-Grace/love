import { not } from "./not.mjs";
import { json_to } from "./json_to.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
("A case may declare `reason_includes` to pin the guidance text the guard");
("hands back, not just its verdict — that text is how a reader learns the");
('right move, so it is worth protecting from silent decay. Returns "" when');
("the case makes no such claim or the claim holds, else what went wrong.");
export function guard_case_reason_note(c, result) {
  let b = property_exists(c, "reason_includes");
  if (not(b)) {
    let r = "";
    return r;
  }
  let needle = property_get(c, "reason_includes");
  let b2 = property_exists(result, "reason");
  if (not(b2)) {
    let r2 =
      "expected reason to include " + json_to(needle) + ", got no reason";
    return r2;
  }
  let reason = property_get(result, "reason");
  if (text_includes(reason, needle)) {
    let r3 = "";
    return r3;
  }
  let r4 = "reason missing " + json_to(needle);
  return r4;
}
