import { qa_commit_named } from "./qa_commit_named.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { true_is } from "./true_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { number_is } from "./number_is.mjs";
import { and } from "./and.mjs";
export async function qa_commit_named_report() {
  "What the record of judged commits currently holds, and how far behind the folder its freshest sound commit has fallen. Asks no gates and ships nothing, so it costs about a second.";
  "It answers the one question the per-app shipping path leaves a reader to work out by hand: can anything be sent out right now. The pieces were all there - the record says which commits were judged, git says how far each has fallen behind - and putting them together took a read of the record and one git call per entry, done by eye. That is the shape of a missing name, so here it is.";
  "How far behind is counted in commits rather than in hours, because commits are what age a judgement. Measured 2026-08-03: the freshest sound commit in the record was a day old and eight hundred and fifty eight commits back, and it is the second number that says why nothing written today could ship from it.";
  "A commit is called sound here exactly when every gate was green for it. That is deliberately stricter than what shipping asks, since a gate red somewhere an app cannot reach does not stop that app - so a record with no sound commit at all may still have one that some particular app can ship from, and the per-app question is the one to ask next rather than this one again.";
  "An entry naming a commit the folder no longer holds keeps its place with nothing for its distance, rather than being dropped or throwing. The record is allowed to outlive the history it names, and losing every good entry beside one forgotten name would be the worse answer.";
  let known = await qa_commit_named();
  let head = await git_head_commit();
  let commits = properties_get(known);
  let looked = [];
  for (let commit of commits) {
    let entry = property_get_or_null(known, commit);
    let value = property_get_or_null(entry, "green");
    let green = true_is(value);
    let failed = property_get_or_null(entry, "failed");
    let behind = await git_commit_behind_count(commit, head);
    list_add(looked, {
      commit,
      green,
      behind,
      failed,
    });
  }
  function shippable_is(one) {
    let entry_green = property_get_or_null(one, "green");
    let counted = property_get_or_null(one, "behind");
    let placed = number_is(counted);
    let both = and(entry_green, placed);
    return both;
  }
  let sound = list_filter(looked, shippable_is);
  ("Nearest to the folder first, so the freshest sound commit is the one at the front. Which order the record itself was written in says nothing about which of its commits is newest");
  function behind_of(one) {
    let counted = property_get_or_null(one, "behind");
    return counted;
  }
  list_sort_number_mapper(sound, behind_of);
  let freshest = list_get_or_null(sound, 0);
  let report = {
    head,
    entries: list_size(looked),
    sound: list_size(sound),
    freshest,
    looked,
  };
  return report;
}
