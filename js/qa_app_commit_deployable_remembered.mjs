import { qa_app_shipped_names } from "./qa_app_shipped_names.mjs";
import { qa_app_commit_gate_run_at_reach } from "./qa_app_commit_gate_run_at_reach.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { not } from "./not.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_commits_between } from "./git_commits_between.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_beside_heads } from "./qa_commit_beside_heads.mjs";
import { qa_commit_entry_beside_matching_is } from "./qa_commit_entry_beside_matching_is.mjs";
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
  "Being in the record is not the same as being usable, and the difference is what made the promise above false until 2026-08-26. An answer is only handed back when it was worked out beside the very same neighbouring repos we are standing beside now; asked about one that was not, the lookup underneath quietly stops looking things up and runs every gate instead - a quarter of an hour, per commit, from a name that says it asks no gates at all. Measured: a ship that should have taken a second took hours, and the walk was still going when it was killed.";
  "So the same question the lookup asks is asked HERE, before the lookup is reached, and a commit whose judging cannot be handed back is counted and stepped over rather than judged. Judging is real work and worth doing - it is simply not this function's work, and its sibling is the one that advertises the price.";
  "Which neighbours could not say where they stand is handed back too, because that one reading explains a run that found nothing at all. A neighbour with work nobody has committed is missing from what we are standing beside, so NO entry in the record can match and none ever will until somebody commits it - which is a minute's work, and unfindable from a count of skipped commits.";
  let folder = folder_current_absolute();
  let head = await git_head_commit();
  let commits = await git_commits_between(folder, head, commit_floor);
  let known = await qa_commit_named();
  ("What this app ships is asked ONCE, out here, and handed to every commit below. It is read off the folder as it stands rather than off any commit, so asked inside the walk it would be the same answer fetched again for each one - measured 2026-08-25 at about thirty-two seconds a fetch, which is where fifteen of the fifteen and a half minutes of one run went. The prose above promises about a second, and now it can keep that promise.");
  let reach = await qa_app_shipped_names(search);
  ("Where the neighbours are standing is read ONCE, out here, for the same reason as the reach: it is a reading of the folders as they stand rather than of any commit, and it is what every entry below gets compared against. Read inside the walk it would also be read again per commit, and worse, it could move part way through - so two commits in one answer would have been judged usable against two different worlds.");
  let beside = await qa_commit_beside_heads();
  let heads = property_get(beside, "heads");
  let looked = [];
  let unjudged = 0;
  let stale = 0;
  let chosen = null;
  for (let commit of commits) {
    let remembered = property_get_or_null(known, commit);
    if (not(remembered)) {
      unjudged = unjudged + 1;
      continue;
    }
    ("The very same question the lookup underneath would ask, asked by the very same named function, so the two cannot drift apart into different ideas of what a usable answer is. Answered no there, it runs the gates; answered no here, we step over the commit - which is the whole of the fix.");
    let matching = qa_commit_entry_beside_matching_is(remembered, heads);
    if (not(matching)) {
      stale = stale + 1;
      continue;
    }
    let at = await qa_app_commit_gate_run_at_reach(search, commit, reach);
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
  let stopped = chosen
    ? "found"
    : "no commit in this range is both judged where that judging can be handed back and shippable for this app";
  let r = {
    app: search,
    head,
    commit_floor,
    chosen,
    stopped,
    judged: list_size(looked),
    unjudged,
    stale,
    silent: property_get(beside, "silent"),
    looked,
  };
  return r;
}
