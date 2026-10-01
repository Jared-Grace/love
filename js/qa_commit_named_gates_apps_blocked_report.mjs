import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { qa_commit_judged_gates_sorted } from "./qa_commit_judged_gates_sorted.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_list_add_unique } from "./property_list_add_unique.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function qa_commit_named_gates_apps_blocked_report() {
  "Which red gates are holding apps out of a deployment as of the last commit anybody judged, biggest first - each gate with the apps it stops by name. Asks no gates and ships nothing.";
  "The reading one name along answers for ONE app, and finding out what was wrong with the folder meant running it thirty-three times and then searching the answers by eye for a gate that kept coming back. That is the specification of this command: a loop of invocations is a missing command, and the loop left nothing behind.";
  "It is the inverse of the per-app reading, and the inverse is the actionable direction. An app owner learns nothing useful from 'you are blocked' - the fix is never theirs alone, because one gate was holding twenty-seven apps and the work that clears it is one piece of work. Measured 2026-10-02: thirty-one of thirty-three apps could ship from none of a hundred and seventy-two judged commits, and a single gate about abandoned build leftovers accounted for twenty-seven of them.";
  "An app that is clear is counted and not listed. Who can ship is already a reading of its own one name along, and repeating it here would be a second answer to that question that could fall out of step with the first.";
  "The sorting is asked for exactly as the per-app reading and the deployment itself ask for it, so this cannot drift from what would really happen. Reading the judged entry field by field instead is the fault that reader exists to stop.";
  "An app whose reach cannot be worked out is named rather than passed over, the same way its neighbour names one. An app quietly missing from a list of who is blocked reads exactly like an app that is free.";
  "Every app's imports are walked once, which is about a second each, so this costs the better part of a minute rather than the second its one-app sibling costs. That is the price of the inversion and it is paid once instead of thirty-three times by hand.";
  "The newest judged commit is taken whatever colour it came out, and how far behind it stands travels with it, because that distance is the whole of how much to trust the answer.";
  arguments_assert(arguments, 0);
  let report = await qa_commit_named_report();
  let opened = qa_commit_named_report_newest(report);
  let head = property_get(opened, "head");
  let nothing = property_get(opened, "nothing");
  if (nothing) {
    let empty = {
      head,
      commit: null,
      behind: null,
      apps: 0,
      blocked: 0,
      gates: [],
      unweighed: [],
    };
    return empty;
  }
  let newest = property_get(opened, "newest");
  let commit = property_get(newest, "commit");
  let behind = property_get(newest, "behind");
  let known = await qa_commit_named();
  let entry = property_get_or_null(known, commit);
  let named_all = await apps_names();
  let apps_unique = list_unique(named_all);
  let by_gate = {};
  let blocked = [];
  let unweighed = [];
  for (let app of apps_unique) {
    async function reached() {
      let names = await qa_app_reachable_names(app);
      return names;
    }
    let reach = await catch_null_async(reached);
    let missing = null_is(reach);
    if (missing) {
      list_add(unweighed, app);
      continue;
    }
    let sorted = qa_commit_judged_gates_sorted(entry, reach);
    let blocking = property_get(sorted, "blocking");
    let clear = list_empty_is(blocking);
    if (clear) {
      continue;
    }
    list_add(blocked, app);
    for (let one of blocking) {
      let gate = property_get(one, "gate");
      property_list_add_unique(by_gate, gate, app);
    }
  }
  let gates = [];
  let gate_names = properties_get(by_gate);
  for (let gate of gate_names) {
    let apps = property_get(by_gate, gate);
    list_add(gates, {
      gate,
      apps_count: list_size(apps),
      apps,
    });
  }
  ("Most apps held first, because a reader looks at the top and the gate stopping the most apps is the one worth clearing");
  function apps_count_of(one) {
    let counted = property_get(one, "apps_count");
    return counted;
  }
  list_sort_number_mapper_reverse(gates, apps_count_of);
  let r = {
    head,
    commit,
    behind,
    apps: list_size(apps_unique),
    blocked: list_size(blocked),
    gates,
    unweighed,
  };
  return r;
}
