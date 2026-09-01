import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_gates_named_listed } from "./qa_gates_named_listed.mjs";
import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_commit_named_red_blocking_report() {
  arguments_assert(arguments, 0);
  ("Which of the gates red as of the last judged commit hold EVERY app out of a deployment, and which hold out only the apps they reach. Asks no gates and needs no app named, so it costs about a second.");
  ("A flat list of red gates does not say whether anything is actually stopped, and that is the reading people were doing by eye. Measured 2026-08-27: twenty-four gates were red and three of them blocked anything at all - so a reader told twenty-four was told a number eight times the size of the problem, and the honest reply to the other twenty-one is that they wait on whoever ships the apps they name.");
  ("The sorting is not done again here. The one the shipping path turns on is pure and takes what an app carries as an argument, so it is asked about an app that carries NOTHING - and then a gate lands under blocking exactly when no reach could have saved it, which is the whole question. Asking it any other way would be a second opinion about deployability that could drift from the first.");
  ("So this is not a weaker check than the per-app one and it is not a different rule. It is the same rule at the one point where the app drops out of it: a gate naming nobody cannot be placed anywhere, and a gate naming somebody is somebody's to fix rather than everybody's.");
  ("The commit and how far behind it has fallen travel with the answer for the same reason its red sibling carries them - a judgement several hundred commits back is about code nobody is running, and a count with no age on it invites being acted upon.");
  let known = await qa_commit_named();
  let report = await qa_commit_named_report();
  let opened = qa_commit_named_report_newest(report);
  let head = property_get(opened, "head");
  let nothing = property_get(opened, "nothing");
  if (nothing) {
    let empty = {
      head,
      commit: null,
      behind: null,
      red: 0,
      blocking: [],
      placeable: [],
    };
    return empty;
  }
  let newest = property_get(opened, "newest");
  let commit = property_get(newest, "commit");
  let entry = property_get(known, commit);
  let green = property_get(entry, "green");
  let failed = property_get(entry, "failed");
  let named = property_get(entry, "named");
  let said = property_get_or_null(entry, "said");
  let listed = qa_gates_named_listed(named, said);
  let reach_none = [];
  let sorted = qa_app_gates_sorted(green, failed, listed, reach_none);
  let r = {
    head,
    commit,
    behind: property_get(newest, "behind"),
    red: list_size(failed),
    blocking: property_get(sorted, "blocking"),
    placeable: property_get(sorted, "elsewhere"),
  };
  return r;
}
