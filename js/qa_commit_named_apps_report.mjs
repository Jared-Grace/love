import { qa_apps_commits_weigh } from "./qa_apps_commits_weigh.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { apps_names } from "./apps_names.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
export async function qa_commit_named_apps_report() {
  "Which apps could be sent out right now, and from how far back - every app in the folder weighed against every commit anybody has already judged. Asks no gates and ships nothing.";
  "Its neighbour counts a commit sound only when every gate was green there, and says so, and says that the per-app question is a different one. This is that different one, asked of the whole record at once. A commit red on a gate no app can reach is useless by the strict count and shippable by every app, and only this one can tell you so.";
  "No floor is named here and none could be. Whether a judged commit carries the work you mean to ship is known to whoever did that work - so this answers what the record holds for whom, and the question of whether a particular commit carries a particular change stays with the walk that takes a floor.";
  "How a red gate is placed is not decided here. The sorting is asked for, exactly as the one-app question asks for it, so the four silent faults found in it over three days stay found in one place and this cannot drift from what a deploy would actually do.";
  "Every app is weighed once and every commit then costs nothing, which is the whole reason this is worth having as one command. Asking the one-app question app by app would walk each app's imports again for every commit in the record.";
  "An app whose reach cannot be worked out is named rather than passed over. It usually means the app is spelled a way the builder's search cannot place, and an app quietly missing from a list of what can ship reads exactly like an app that can ship from nothing.";
  let known = await qa_commit_named();
  let head = await git_head_commit();
  let commits = properties_get(known);
  ("How far back each judged commit stands is asked once here rather than once per app, because it is a fact about the folder and the app being weighed has nothing to do with it");
  let distances = {};
  for (let commit of commits) {
    distances[commit] = await git_commit_behind_count(commit, head);
  }
  let named_all = await apps_names();
  let apps_unique = list_unique(named_all);
  let looked = [];
  let unweighed = [];
  await qa_apps_commits_weigh(
    apps_unique,
    unweighed,
    commits,
    known,
    distances,
    looked,
  );
  let r = {
    head,
    entries: list_size(commits),
    apps: looked,
    unweighed,
  };
  return r;
}
