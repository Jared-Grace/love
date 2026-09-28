import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_map_name_after } from "./git_commit_map_name_after.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function git_commit_name_after_maps(reads, commit) {
  "$plain commit";
  "What a commit name written down before some rewrites is called now, walked through the given records in order, with the renamings it went through named one by one.";
  "★ EVERY RECORD IS ASKED, NOT ONLY THE ONE THE NAME IS FOUND IN. A name written two rewrites ago needs the first record and then the second, and the answer of the first is what the second is asked about. Stopping at the first record that answers gives the name as of one rewrite ago and looks like a finished answer, which is the failure worth the most: the name that comes back resolves, is the right length, and points at a commit that no longer exists.";
  "★ A RECORD THAT DOES NOT MENTION THE NAME CHANGES NOTHING AND IS NOT A FAILURE. That is what the records before the one a name belongs to look like, and what a name already current looks like in all of them. The steps list is how the difference is read afterwards: empty steps means nothing renamed this, and a caller that needs to know whether anything happened reads that rather than comparing the two names.";
  "★ A RECORD THAT MENTIONS THE NAME AND GIVES IT BACK UNCHANGED IS NOT A STEP EITHER. A rewrite renames a commit and everything built on top of it, and leaves everything older than it alone - so a commit older than the oldest thing any of these rewrites touched is listed in all of them, named as itself each time. Counting those as steps would say three rewrites renamed a commit that none of them touched.";
  arguments_assert(arguments, 2);
  let steps = [];
  let now = commit;
  for (let read of reads) {
    let after = git_commit_map_name_after(read, now);
    let b = null_is(after);
    let mentioned = not(b);
    if (mentioned) {
      let changed = equal_not(after, now);
      if (changed) {
        let name = property_get(read, "name");
        let step = {
          name,
          before: now,
          after,
        };
        list_add(steps, step);
      }
      now = after;
    }
  }
  let renamed = list_empty_not_is(steps);
  let r = {
    commit,
    renamed,
    steps,
    after: now,
  };
  return r;
}
