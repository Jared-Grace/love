import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_change } from "./text_prefix_change.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
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
  "The proof is the whole point of a rehearsal and it is in two halves. Every blob the current commit holds must still be held afterwards, the same set exactly - that is what says not one byte was lost, added or altered. And every path afterwards must be the path before it with the substitution applied - that is what says each name landed where it was meant to. Neither half alone is a proof: the blobs alone would pass a rewrite that moved a file somewhere nobody asked for, and the paths alone would pass one that renamed the names correctly while changing what was under them.";
  "Its neighbour proves a rewrite by the name of the tree alone, and that cannot be borrowed here. A rename changes the tree by design, so the same tree name on both sides would mean the rewrite had done nothing at all - the check that proves a drop is the check that would hide a rename.";
  "The substitution is worked out here with the same prefix rule the rewrite is handed, and neither is bent to fit the other. If the two ever come to disagree about what a prefix means, this fails loudly rather than quietly renaming something nobody named.";
  "A name that matches no path is refused rather than passed over. A rename that renames nothing is a typo, and a typo let through a rehearsal has been proved safe rather than proved right.";
  "The copy is made on the machine's own scratch folder and never inside the repository. Making it inside was how four copies of this repository once ended up committed into it, and they were the largest thing in its history for the better part of a year.";
  arguments_assert(arguments, 3);
  let befores = text_split_comma(folders_before_text);
  let afters = text_split_comma(folders_after_text);
  let named = list_empty_not_is(befores);
  assert_json(named, {
    hint: "no folders were named to rename in the history — would you like to pass them as one comma-joined word?",
    folders_before_text,
  });
  lists_sizes_equal_assert_json([befores, afters], {
    hint: "each folder being renamed needs exactly one name to be renamed to — would you like to pass the two lists with the same number of words?",
    befores,
    afters,
  });
  let pairs = [];
  let at = 0;
  for (let one of befores) {
    let other = afters[at];
    list_add(pairs, {
      before: one,
      after: other,
    });
    at = at + 1;
  }
  let tracked_before = await git_head_tracked(folder);
  let paths_expected = {};
  let matched = {};
  for (let path of object_property_names(tracked_before.paths)) {
    let renamed = path;
    for (let pair of pairs) {
      let starts = text_starts_with(path, pair.before);
      if (starts) {
        renamed = text_prefix_change(path, pair.before, pair.after);
        matched[pair.before] = true;
        break;
      }
    }
    paths_expected[renamed] = true;
  }
  let unmatched = [];
  for (let one of befores) {
    let hit = matched[one];
    if (not(hit)) {
      list_add(unmatched, one);
    }
  }
  list_empty_is_assert_json(unmatched, {
    hint: "these names match no path the current commit holds, so renaming them would move nothing — would you like to name only folders the present actually holds?",
    unmatched,
  });
  let commits_before = await git_folder_commits_count(folder);
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
  let asked = ["filter-repo", "--force"];
  for (let pair of pairs) {
    let left = text_combine(pair.before, ":");
    let spelled = text_combine(left, pair.after);
    list_add_multiple(asked, ["--path-rename", spelled]);
  }
  await git_folder_run(clone_folder, asked);
  let tracked_after = await git_head_tracked(clone_folder);
  json_equal_assert_json(tracked_after.blob_names, tracked_before.blob_names, {
    hint: "the rewrite changed what the current commit holds rather than only what it calls things — the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    pairs,
  });
  json_equal_assert_json(tracked_after.paths, paths_expected, {
    hint: "the names after the rewrite are not the names before it with the substitution applied — the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    pairs,
  });
  let commits_after = await git_folder_commits_count(clone_folder);
  let r = {
    clone_folder,
    pairs,
    commits_before,
    commits_after,
  };
  return r;
}
