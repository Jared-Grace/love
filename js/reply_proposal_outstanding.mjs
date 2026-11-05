import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposal_drawn } from "./reply_proposal_drawn.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { reply_proposal_changed_approval } from "./reply_proposal_changed_approval.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { reply_case_approval } from "./reply_case_approval.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { reply_approved_verdict } from "./reply_approved_verdict.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposal_outstanding(proposal, approvals) {
  arguments_assert(arguments, 2);
  ("What still stands between one change and going in: each approval it lacks, by name, with the verdict that approval has now.");
  let drawn = await reply_proposal_drawn(proposal);
  let missing = property_list_empty_not_is(drawn, "unplaced");
  if (missing) {
    let unplaced = property_get(drawn, "unplaced");
    let r = [
      {
        name: "lines_not_in_file",
        verdict: unplaced,
      },
    ];
    return r;
  }
  let f_name = property_get(proposal, "fn");
  let title = property_get(proposal, "title");
  let drawn_lines = property_get(drawn, "lines");
  let altered = reply_proposal_changed_approval(title, f_name, drawn_lines);
  let files = [altered];
  let whole = property_get(drawn, "whole");
  list_add_multiple(files, whole);
  ("★ THE TESTS OF A CHANGE ARE APPROVED LIKE ITS CODE. What a change was measured to answer is the half a person can judge on sight, so a change goes in only once each of its exchanges has been passed in the words it has now.");
  ("★ A TEST WITH NO REPLY IS OWED NO VERDICT, because no words go out and the screen offers it no button. Asking for one here held a change back forever with nothing left for anybody to press.");
  let cases = property_get(proposal, "cases");
  function answered_is(one) {
    let answered = property_get(one, "answered");
    return answered;
  }
  let replying = list_filter(cases, answered_is);
  function each_test(one) {
    let message = property_get(one, "message");
    let answered = property_get(one, "answered");
    let outputs = property_get(one, "outputs");
    let test = reply_case_approval(message, answered, outputs);
    return test;
  }
  let tests = list_map(replying, each_test);
  list_add_multiple(files, tests);
  let outstanding = [];
  for (let file of files) {
    let name = property_get(file, "name");
    let lines = property_get(file, "lines");
    let text = list_join_newline(lines);
    let approved = property_get_or_null(approvals, name);
    let verdict = reply_approved_verdict(text, approved);
    let passed = equal(verdict, "approved");
    if (not(passed)) {
      list_add(outstanding, {
        name,
        verdict,
      });
    }
  }
  return outstanding;
}
