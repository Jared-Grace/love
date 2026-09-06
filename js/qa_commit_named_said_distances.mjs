import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_commit_named_said_distances(remembered, head) {
  "Measures how far behind a given commit every remembered judgement that still holds what its gates said stands, and names the ones the folder can still reach.";
  "EVERY ONE OF THEM IS MEASURED BEFORE ANY OF THEM IS JUDGED, which is the whole reason this is asked on its own. Which judgements are the nearest cannot be known from any single judgement - it is a place in an order, and there is no order until the last one has been measured. A reading that decided as it went would be deciding against whatever it happened to have seen so far.";
  "Only the judgements still holding what their gates said are measured. The rest have nothing left to let go of, so asking the folder about them would be a walk of the history bought for an answer nobody would read.";
  "TWO THINGS COME BACK AND THEY ARE NOT THE SAME LIST. The distances hold every commit that was asked about, including the ones the folder no longer has, whose distance is nothing at all; the names hold only those it can still reach, because a commit with no distance has no place in an order. Keeping both is what lets a caller sort by nearness and still tell a commit that is far away from one that is gone.";
  arguments_assert(arguments, 2);
  let distances = {};
  let spoken = [];
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let unspoken = property_null_is(entry, "said");
    if (unspoken) {
      continue;
    }
    let behind = await git_commit_behind_count(commit, head);
    distances[commit] = behind;
    let gone = null_is(behind);
    if (gone) {
      continue;
    }
    list_add(spoken, commit);
  }
  let r = {
    distances,
    spoken,
  };
  return r;
}
