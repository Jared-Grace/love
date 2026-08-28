import { property_null_is } from "./property_null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_all } from "./qa_commit_named_all.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_commit_named_behind_ceiling } from "./qa_commit_named_behind_ceiling.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { greater_than } from "./greater_than.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { property_delete } from "./property_delete.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_named_said_expire() {
  "Takes what each gate said out of every remembered judgement that has fallen too far behind the folder to be asked about again, leaving the judgement itself untouched.";
  "What a gate said is kept beside the names read out of it so that a corrected reader can work the names out again instead of the gates being run a second time. That is worth having, and it is only worth having while somebody might still ask. A judgement further behind the folder than a deployment will accept is never read for its names again, so the saying under it is insurance on a question nobody will put.";
  "Measured 2026-08-27: the record held 1333 judgements and 39.7 MiB, of which the sayings were 35.1 MiB - eighty-nine percent. Every judging rewrites the whole file, so history was carrying 1174 copies of it: 171.6 MiB packed, out of a repository of 250 MiB. Two thirds of everything anyone clones was this one field, twelve days after a history rewrite done to shrink the repository.";
  "The distance is the same one a deployment reads, rather than a number of its own. A saying is worth keeping exactly as long as the judging it belongs to could still let something ship, so there is one place to change if that ever moves.";
  "A judgement whose commit the folder no longer holds has no distance at all, and that is further away rather than nearer: nothing can ship from a commit that is gone, so its saying is expired like the rest.";
  "What the gates found is never touched. Green, the red gates and the names each of them spoke all stay exactly as the frozen copy answered them, so every question the record is actually asked - what is red, how long it has been red, what may ship - is answered the same afterwards. Only the working that produced the names goes.";
  "Nothing is written when nothing has expired, so asking is free and can be repeated.";
  "The file is read whole here, and not through the reading everybody else uses. That one leaves out the judgings that no longer stand, and the file is written back from what was read - so a filtered reading would quietly delete every entry it was never shown.";
  arguments_assert(arguments, 0);
  let remembered = await qa_commit_named_all();
  let head = await git_head_commit();
  let ceiling = qa_commit_named_behind_ceiling();
  let expired = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    kept[commit] = entry;
    let unspoken = property_null_is(entry, "said");
    if (unspoken) {
      continue;
    }
    let behind = await git_commit_behind_count(commit, head);
    let gone = null_is(behind);
    let beyond = greater_than(behind, ceiling);
    let far = or(gone, beyond);
    let near = not(far);
    if (near) {
      continue;
    }
    property_delete(entry, "said");
    list_add(expired, commit);
  }
  let none = list_empty_is(expired);
  if (none) {
    let unchanged = {
      expired: [],
      kept: object_property_names(remembered).length,
    };
    return unchanged;
  }
  let path = qa_commit_named_path();
  await file_overwrite_json(path, kept);
  let r = {
    expired,
    kept: object_property_names(kept).length,
  };
  return r;
}
