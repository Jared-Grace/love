import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposal_drawn } from "./reply_proposal_drawn.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { reply_approved_verdict } from "./reply_approved_verdict.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function reply_proposal_approved_is(proposal, approvals) {
  arguments_assert(arguments, 2);
  ("Whether every file one change touches has been approved, in the wording it has right now.");
  ("★ ONE FILE NOT APPROVED, OR APPROVED IN AN OLDER WORDING, IS A NO FOR THE WHOLE CHANGE. The change is applied on the strength of this answer and nobody is asked again, so a yes here has to mean that a person read every line that is about to go in.");
  ("A change with lines its file no longer holds is never approved, whatever was stored for it. The screen offers no button for one, and a verdict left over from before the file moved was given for a change that can no longer be drawn.");
  let drawn = await reply_proposal_drawn(proposal);
  let unplaced = property_get(drawn, "unplaced");
  let missing = list_empty_not_is(unplaced);
  if (missing) {
    return false;
  }
  let f_name = property_get(proposal, "fn");
  let altered = {
    name: f_name,
    lines: property_get(drawn, "lines"),
  };
  let files = [altered];
  let whole = property_get(drawn, "whole");
  list_add_multiple(files, whole);
  for (let file of files) {
    let name = property_get(file, "name");
    let lines = property_get(file, "lines");
    let text = list_join_newline(lines);
    let approved = property_get_or_null(approvals, name);
    let verdict = reply_approved_verdict(text, approved);
    let passed = equal(verdict, "approved");
    if (not(passed)) {
      return false;
    }
  }
  return true;
}
