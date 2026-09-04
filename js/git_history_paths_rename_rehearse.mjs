import { arguments_assert } from "./arguments_assert.mjs";
import { text_pairs_comma_before_after } from "./text_pairs_comma_before_after.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { git_history_paths_rename_expected } from "./git_history_paths_rename_expected.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_names_text_sorted } from "./object_property_names_text_sorted.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
export async function git_history_paths_rename_rehearse(
  folder,
  folders_before_text,
  folders_after_text,
) {
  "$plain folder";
  "$plain folders_before_text";
  "$plain folders_after_text";
  "Does the whole of a history rename on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "The half of a layout change that git cannot otherwise be told about. Moving a folder in an ordinary commit leaves every old name dead at the current commit, and a name the history carries that the present has lost is exactly what the heavy-absent gate is for - so an honest tidy-up reads to it as a deletion and is counted against every app. Renaming through the history instead means the old names were never there, so there is nothing for that gate to find and nothing is lost, because every byte stays under its new name.";
  "Its neighbour drops paths instead, and the difference between them is what makes this the safer of the two. Dropping takes content out of the past for good; renaming keeps all of it and changes only what it is called. Where either would do, this is the one to reach for, and until it existed the only tool on offer for a folder that had moved was the one that erases it.";
  "The proof is the whole point of a rehearsal and it is in two halves. Every blob the commit under test holds must still be held afterwards, the same set exactly - that is what says not one byte was lost, added or altered. And every path afterwards must be the path before it with the substitution applied - that is what says each name landed where it was meant to. Neither half alone is a proof: the blobs alone would pass a rewrite that moved a file somewhere nobody asked for, and the paths alone would pass one that renamed the names correctly while changing what was under them.";
  "BOTH HALVES ARE COMPARED AS SORTED LISTS OF NAMES, AND NEVER AS THE TWO COLLECTIONS THEMSELVES, which is why every reading of names here goes through the one that sorts as it reads and why that one carries the reason. Measured 2026-09-03 on a rename of four files out of sixty-four, every blob identical and every name exactly where it was meant to be: both halves of the proof failed, on the order alone.";
  "That failure is the one this function's own prose already called the worst kind, and it had it. A proof that fails when nothing is wrong teaches its reader to disbelieve it, and a disbelieved proof in front of a history rewrite is worse than no proof at all, because the way past it is to stop reading it.";
  "BOTH HALVES OF THE PROOF ARE READ OFF THE COPY, AND NEITHER OFF THE REPOSITORY THIS WAS POINTED AT. They are two readings of one commit, so they have to be readings of the SAME commit, and the only commit that is certainly still there when the second reading happens is the one inside the copy. Read the before-half off the live folder instead and the two halves stand on different commits whenever anybody commits in between - which here is constantly, because every Claude works in one shared folder on one branch. Measured 2026-09-02: a rename that was in fact perfect failed its own blob check on sixty paths out of thirty-two thousand, every one of them a peer's commit landing during the rewrite.";
  "Its neighbour proves a rewrite by the name of the tree alone, and that cannot be borrowed here. A rename changes the tree by design, so the same tree name on both sides would mean the rewrite had done nothing at all - the check that proves a drop is the check that would hide a rename.";
  "WHICH COMMIT THE COPY WAS TAKEN AT IS HANDED BACK, and it is read off the copy rather than off the folder just before cloning. The accepting half throws the repository onto the copy's history, so anything committed after the copy was taken is thrown away with it - and in one shared folder on one branch that is a peer's work, silently. The accepting half refuses when this no longer matches, which turns a destroyed afternoon into a second rehearsal. Reading it off the copy is what makes the answer certain rather than nearly certain: the copy holds one commit whatever happened in the moment after the clone began.";
  "The tree the rewrite arrived at is handed back for the same reason, so that the accepting half can prove the repository came out holding what was proved here rather than something else.";
  "Working out what the names ought to be comes before the rewrite runs and reads the copy's own paths, so a name matching nothing is refused while the only cost so far is one copy. That is the price of the two halves standing on one commit, and a wasted copy is cheaper than a proof nobody believes.";
  "The copy is made on the machine's own scratch folder and never inside the repository. Making it inside was how four copies of this repository once ended up committed into it, and they were the largest thing in its history for the better part of a year.";
  arguments_assert(arguments, 3);
  let pairs = text_pairs_comma_before_after(
    folders_before_text,
    folders_after_text,
  );
  let name = await uuid();
  let folder2 = await folder_machine_temp();
  let clone_folder = path_join([folder2, name]);
  await git_folder_run(folder, [
    "clone",
    "--no-hardlinks",
    "--bare",
    folder,
    clone_folder,
  ]);
  let commit = await git_folder_head_commit(clone_folder);
  let tracked_before = await git_head_tracked(clone_folder);
  let commits_before = await git_folder_commits_count(clone_folder);
  let paths_before = object_property_names(tracked_before.paths);
  let paths_expected = git_history_paths_rename_expected(
    paths_before,
    pairs,
    clone_folder,
  );
  let asked = ["filter-repo", "--force"];
  for (let pair of pairs) {
    let spelled = text_combine_3(pair.before, ":", pair.after);
    list_add_multiple(asked, ["--path-rename", spelled]);
  }
  await git_folder_run(clone_folder, asked);
  let tracked_after = await git_head_tracked(clone_folder);
  let blobs_before = object_property_names_text_sorted(
    tracked_before.blob_names,
  );
  let blobs_after = object_property_names_text_sorted(tracked_after.blob_names);
  json_equal_assert_json(blobs_after, blobs_before, {
    hint: "the rewrite changed what the commit under test holds rather than only what it calls things — the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    pairs,
  });
  let names_expected = object_property_names_text_sorted(paths_expected);
  let names_after = object_property_names_text_sorted(tracked_after.paths);
  json_equal_assert_json(names_after, names_expected, {
    hint: "the names after the rewrite are not the names before it with the substitution applied — the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    pairs,
  });
  let tree = await git_folder_head_tree(clone_folder);
  let commits_after = await git_folder_commits_count(clone_folder);
  let r = {
    clone_folder,
    pairs,
    commit,
    tree,
    commits_before,
    commits_after,
  };
  return r;
}
