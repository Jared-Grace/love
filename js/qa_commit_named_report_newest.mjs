import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_looked_nearest_first } from "./qa_commit_looked_nearest_first.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function qa_commit_named_report_newest(report) {
  "The freshest judged commit in a record of judged commits, the rest of them ordered nearest first behind it, the folder's own commit, and whether anything was judged at all.";
  "Both readings of the record open exactly this way and neither can go further without it: which gates are red as of the freshest judgement, and how long each of those has been red. They differ in what they do with the answer, not in how they reach it.";
  arguments_assert(arguments, 1);
  let head = property_get(report, "head");
  let looked = property_get(report, "looked");
  let placed = qa_commit_looked_nearest_first(looked);
  let newest = list_get_or_null(placed, 0);
  ("A record holding nothing about any commit this folder still has answers with the folder's own commit and no gates, rather than throwing. Having judged nothing yet is the ordinary state of a thing that has just begun.");
  let nothing = null_is(newest);
  let r = {
    head,
    placed,
    newest,
    nothing,
  };
  return r;
}
