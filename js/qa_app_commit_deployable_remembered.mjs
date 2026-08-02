import { property_list_map_property } from "./property_list_map_property.mjs";
import { not } from "./not.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_commits_between } from "./git_commits_between.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
export async function qa_app_commit_deployable_remembered(
  search,
  commit_floor,
) {
  "The newest commit this app can be shipped from that somebody has ALREADY judged. Asks no gates at all, so it answers in about a second, and ships nothing.";
  "Its sibling walks the same range judging whatever it meets, and a commit nobody has judged costs a full run of every gate - about fourteen minutes. Measured 2026-08-02: the range between a change and where we were standing was a hundred and eighty five commits, so that walk was days of work. It ran forty minutes and reached five of them. Meanwhile the answer was already written down: a commit two and three quarter hours old, judged well on every gate, and carrying the change. This is that lookup, given a name.";
  "The two are not rivals and this one is not a cheaper version of that one. This asks what is known; that finds out. Ask this first, because when it answers you are done, and when it does not you have lost a second.";
  "Age is not what makes a commit shippable and neither is being newest. What makes it shippable is being sound and being descended from the work you mean to ship - so a judged commit from hours ago beats an unjudged one from a minute ago, every time, and beats it by days.";
  "The floor is named by the caller and never guessed, for the same reason as in the walk: which commit carries this app's work is known to whoever did the work, and a guess would quietly ship a build missing the fix it was built for. The range is what proves descent, so a judged commit lying outside it is no use however well it was judged.";
  "Every judged commit that was looked at and set aside is reported with what blocked it. A run that answers nothing then reads as what it is - the judged commits in this range are all blocked for this app - rather than as the record being empty.";
  let folder = folder_current_absolute();
  let head = await git_head_commit();
  let commits = await git_commits_between(folder, head, commit_floor);
  let known = await qa_commit_named();
  let looked = [];
  let unjudged = 0;
  let chosen = null;
  for (let commit of commits) {
    let remembered = property_get_or_null(known, commit);
    if (not(remembered)) {
      unjudged = unjudged + 1;
      continue;
    }
    let at = await qa_app_commit_gate_run_at(search, commit);
    let deployable = property_get(at, "deployable");
    let blocking = property_get(at, "blocking");
    let elsewhere = property_list_map_property(at, "elsewhere", "gate");
    list_add(looked, {
      commit,
      deployable,
      blocking,
      elsewhere,
    });
    if (deployable) {
      chosen = commit;
      break;
    }
  }
  let stopped = chosen ? "found" : "nothing judged in this range can ship";
  let r = {
    app: search,
    head,
    commit_floor,
    chosen,
    stopped,
    judged: list_size(looked),
    unjudged,
    looked,
  };
  return r;
}
