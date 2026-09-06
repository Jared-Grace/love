import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_all } from "./qa_commit_named_all.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_commit_named_behind_ceiling } from "./qa_commit_named_behind_ceiling.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { qa_commit_named_said_kept_count } from "./qa_commit_named_said_kept_count.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than } from "./greater_than.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { property_delete } from "./property_delete.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_commit_named_said_expire() {
  "Takes what each gate said out of every remembered judgement that has fallen too far behind the folder to be asked about again, leaving the judgement itself untouched.";
  "What a gate said is kept beside the names read out of it so that a corrected reader can work the names out again instead of the gates being run a second time. That is worth having, and it is only worth having while somebody might still ask. A judgement further behind the folder than anything will be started from again is never read for its names again, so the saying under it is insurance on a question nobody will put.";
  "Measured 2026-08-27: the record held 1333 judgements and 39.7 MiB, of which the sayings were 35.1 MiB - eighty-nine percent. Every judging rewrites the whole file, so history was carrying 1174 copies of it: 171.6 MiB packed, out of a repository of 250 MiB. Two thirds of everything anyone clones was this one field, twelve days after a history rewrite done to shrink the repository.";
  "A judgement whose commit the folder no longer holds has no distance at all, and that is further away rather than nearer: nothing can ship from a commit that is gone, so its saying is expired like the rest.";
  "★ THE NEAREST FEW JUDGEMENTS ARE KEPT WHATEVER THEIR DISTANCE, because there is nothing nearer for anybody to start from and distance cannot disqualify the best there is. A judging reads every gate at one commit and takes about two hours to do it, while the folder moves some twenty-five commits an hour, so a judgement is already further behind than the ceiling on the day it is filed. Measured 2026-09-06: the freshest judging in the record stood sixty-three commits back before anything had had a chance to read it. Trimming by distance alone therefore threw away every saying the moment it was written, and the record answered nothing for anyone.";
  "★ IT IS THE NEAREST FEW AND NOT THE NEAREST ONE, because a judging takes about two hours and the ceiling is crossed in about one, so the newest judgement ages out of its own keeping before its replacement lands. Keeping only that one leaves a window with no saying in the record at all - measured 2026-09-06, every red gate in it named nobody, a gate naming nobody counts against every app, and the whole site was unshippable while nothing was wrong with any part of it. How many is said one name along, so the number and the reason for it are in one place.";
  "★ A COMMIT THAT AN APP'S WAITING PIECES WERE BUILT OUT OF IS KEPT AT ANY DISTANCE, because distance is not what decides whether anybody asks. Sending reads the record for the names of every app holding a note, however far back the note stands, and an app whose note has aged is the one it asks about hardest - so the saying under exactly those commits is not insurance on an unasked question, it is the answer to the question a sending puts every single time.";
  "Measured 2026-09-06: a deployment of twenty-nine apps ran for over two hours while the folder moved a hundred and eight commits, so the judging it had been started from expired underneath it. Every gate in that judging then named nobody, a gate naming nobody counts against every app, and the sending refused the whole site on the strength of its own housekeeping. The apps had been built, checked and staged correctly; nothing was wrong with any of them.";
  "The two keepings hand over to one another, and that is why both are needed. The nearest few judgements are protected from the moment they are filed until a deployment starting from one of them writes its first note; that note then protects the same commit for as long as the pieces built out of it are waiting, by which time something fresher has usually taken the first protection over.";
  "The keeping is bounded by how many apps there are rather than by how far back anybody looks, so it cannot grow the file the way the distance rule was written to stop: one commit an app, several apps usually name the same one, and a fixed handful more for the nearest judgings.";
  "What the gates found is never touched. Green, the red gates and the names each of them spoke all stay exactly as the frozen copy answered them, so every question the record is actually asked - what is red, how long it has been red, what may ship - is answered the same afterwards. Only the working that produced the names goes.";
  "Nothing is written when nothing has expired, so asking is free and can be repeated.";
  "The file is read whole here, and not through the reading everybody else uses. That one leaves out the judgings that no longer stand, and the file is written back from what was read - so a filtered reading would quietly delete every entry it was never shown.";
  arguments_assert(arguments, 0);
  let remembered = await qa_commit_named_all();
  let head = await git_head_commit();
  let ceiling = qa_commit_named_behind_ceiling();
  let promoted = await qa_promoted();
  let standing = [];
  for (let app_name of object_property_names(promoted)) {
    let note = property_get_or_null(promoted, app_name);
    let unwritten = null_is(note);
    if (unwritten) {
      continue;
    }
    let named = property_get_or_null(note, "commit");
    let unnamed = null_is(named);
    if (unnamed) {
      continue;
    }
    list_add(standing, named);
  }
  ("How far back each spoken judgement stands is worked out once, before anything is let go, because which of them are the nearest cannot be known until all of them have been measured.");
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
  function commit_behind(commit) {
    let behind = property_get(distances, commit);
    return behind;
  }
  list_sort_number_mapper(spoken, commit_behind);
  let kept_count = qa_commit_named_said_kept_count();
  let nearest = list_slice_count(spoken, 0, kept_count);
  let protected_commits = list_concat(standing, nearest);
  let expired = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    kept[commit] = entry;
    let unspoken = property_null_is(entry, "said");
    if (unspoken) {
      continue;
    }
    let waiting = list_includes(protected_commits, commit);
    if (waiting) {
      continue;
    }
    let behind = property_get_or_null(distances, commit);
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
