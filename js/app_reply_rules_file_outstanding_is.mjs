import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { reply_approved_verdict } from "./reply_approved_verdict.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_reply_rules_file_outstanding_is(f_name, lines, approvals) {
  arguments_assert(arguments, 3);
  ("Whether one file of a change still needs somebody to read it: not approved at all, or approved in a wording it no longer has.");
  ("A file approved in an older wording counts as outstanding, because those are exactly the lines that now need reading again.");
  let text = list_join_newline(lines);
  let approved = property_get_or_null(approvals, f_name);
  let verdict = reply_approved_verdict(text, approved);
  let passed = equal(verdict, "approved");
  let outstanding = not(passed);
  return outstanding;
}
