import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_app_reachable_names } from "./qa_app_reachable_names.mjs";
import { qa_commit_judged_gates_sorted } from "./qa_commit_judged_gates_sorted.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_commit_named_app_blocking_report(a_name) {
  "Which red gates are holding one named app out of a deployment, as of the last commit anybody judged - the gates, and which of the app's own functions each one named. Asks no gates and ships nothing, so it costs about a second.";
  "$plain a_name";
  "the name is an app's, as the folder spells it. It names what is built and nothing that runs.";
  "The reading one name along counts how many judged commits each app could ship from and throws away WHY, and the count alone is not actionable: measured 2026-10-02, 31 of the 33 apps could ship from none of 172 judged commits, and nothing anywhere could say what was stopping any one of them. The sorting that decides it is already asked once per app per commit inside that walk - about five thousand times - and only whether its answer was empty is kept.";
  "It is the same sorting a deployment itself turns on, asked the same way, so this cannot drift from what would actually happen. Reading the judged entry field by field instead is the fault that reading was written to stop: a gate that complains in a record rather than in English comes back naming nobody, and a gate naming nobody is counted against every app there is.";
  "The gates placed somewhere else are counted rather than listed. They are the great majority and they are not this app's business - the whole point of the sorting is that a repo full of red says nothing about whether one app may go out - but the count travels because none at all and a hundred elsewhere are different situations and read identically otherwise.";
  "The newest judged commit is taken whatever colour it came out, and how far behind it stands travels with it, because that distance is the whole of how much to trust the answer. A judgement several hundred commits back is about code nobody is running.";
  let report = await qa_commit_named_report();
  let opened = qa_commit_named_report_newest(report);
  let head = property_get(opened, "head");
  let nothing = property_get(opened, "nothing");
  if (nothing) {
    let empty = {
      head,
      app: a_name,
      commit: null,
      behind: null,
      blocking: [],
      elsewhere: 0,
    };
    return empty;
  }
  let newest = property_get(opened, "newest");
  let commit = property_get(newest, "commit");
  let behind = property_get(newest, "behind");
  let known = await qa_commit_named();
  let entry = property_get(known, commit);
  let reach = await qa_app_reachable_names(a_name);
  let sorted = qa_commit_judged_gates_sorted(entry, reach);
  let blocking = property_get(sorted, "blocking");
  let elsewhere = property_get(sorted, "elsewhere");
  let r = {
    head,
    app: a_name,
    commit,
    behind,
    blocking,
    elsewhere: list_size(elsewhere),
  };
  return r;
}
