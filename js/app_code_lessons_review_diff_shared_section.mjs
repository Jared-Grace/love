import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_review_diff_shared_section(entry) {
  "One group of changed shared helpers as a part of the written report: a heading saying how many lessons stand on them and which ones, how much changed, and then the change itself.";
  "THE LESSONS ARE NAMED RATHER THAN COUNTED, because a count alone leaves the reader with the work the grouping was done to save - going and finding out which lessons a helper belongs to before they can judge whether the edit matters.";
  "EXCEPT WHERE THE GROUP IS THE WHOLE RUN, where naming every lesson would fill the heading with the answer nobody needs. A helper the whole run stands on is the app itself, and saying so is the whole of what a reader has to know.";
  arguments_assert(arguments, 1);
  let named = "the whole run";
  if (not(entry.whole_run)) {
    named = list_join_comma_space(entry.lessons);
  }
  ("The heading says which of those lessons the learner already had, because that is what decides whether the group is worth opening at all. A helper only new lessons stand on is new writing and gets read with them; a helper an already-read screen stands on is the one that changed under somebody who has finished it.");
  let already = "  ALL NEW";
  if (greater_than(entry.had, 0)) {
    let joined = list_join_comma_space(entry.lessons_had);
    already = text_combine_multiple(["  already read: ", joined]);
  }
  let v = String(entry.count);
  let v2 = String(entry.added);
  let v3 = String(entry.taken);
  let v4 = String(entry.moved);
  let heading = text_combine_multiple([
    "======== shared by ",
    v,
    "  ",
    named,
    "  +",
    v2,
    " -",
    v3,
    "  moved ",
    v4,
    already,
    "\n\n",
  ]);
  let section = text_combine_multiple([heading, entry.diff_text, "\n"]);
  return section;
}
