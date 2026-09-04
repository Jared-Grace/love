import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { git_history_heavy_absent } from "./git_history_heavy_absent.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_change } from "./text_prefix_change.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function git_history_heavy_absent_baseline_rekey(
  prefix_before,
  prefix_after,
) {
  "$plain prefix_before";
  "$plain prefix_after";
  arguments_assert(arguments, 2);
  ("Spell this ratchet's record under a folder name the history has been rewritten to use, once it can be shown that the rewrite renamed the very files the record already held and let no new one in.");
  ("The record beside this one refuses to grow, on purpose and rightly: a path written into it is a large file blessed into the past of every copy of this repo that will ever be made, and the moment it can still be lifted out cheaply is the moment growth must be refused. That refusal reads a path as a name. A history rewrite that moves a folder gives the same file a new name, so every one of them arrives at the refusal looking exactly like a newcomer, and the ratchet deadlocks against a rename it has no way to recognise.");
  ("What settles it is that a rename is provable rather than argued. Take the record, put the new folder name at the front of every path that begins with the old one, leave the rest alone, and hold the answer against what the history carries now. If the two are the same set, then no file entered and none left - only the spelling moved, and the very thing the refusal exists to prevent has not happened. If they differ by so much as one name, this refuses and hands both sides over, because at that point something really did change and the refusal was right.");
  ("So the proof is the whole of the command, and the write is the small part at the end. That is the shape a let-off has to take here: not a reason written beside the exemption, but a check that fails when the reason stops being true.");
  ("A rename that renames nothing is refused as well. A prefix matching no recorded path would sail through the comparison untouched and rewrite the record with a fresh reading, which is the unchecked write this was built to avoid wearing the name of a proof.");
  let path = git_history_heavy_absent_baseline_path();
  let recorded = await baseline_known_read(path);
  let found = await git_history_heavy_absent();
  let renamed = [];
  for (let name of recorded) {
    let starts = text_starts_with(name, prefix_before);
    if (starts) {
      let changed = text_prefix_change(name, prefix_before, prefix_after);
      list_add(renamed, changed);
    }
    if (not(starts)) {
      list_add(renamed, name);
    }
  }
  let moved = list_difference(renamed, recorded);
  list_empty_not_is_assert_json(moved, {
    hint: "this folder name begins no path the record holds, so renaming it would move nothing - would you like to name the folder the rewrite actually moved?",
    prefix_before,
    prefix_after,
    recorded,
  });
  let renamed_sorted = list_sort_text(renamed);
  let found_sorted = list_sort_text(found);
  json_equal_assert_json(renamed_sorted, found_sorted, {
    hint: "renaming the folder in the record does not give what the history carries now, so this is not only a rename - a large file has entered the past or left it, and blessing that is the one thing this ratchet exists to refuse",
    prefix_before,
    prefix_after,
  });
  let count = await baseline_known_write(found_sorted, path);
  let r = {
    moved,
    recorded: count,
  };
  return r;
}
