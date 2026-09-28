import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_map_names_matching } from "./git_commit_map_names_matching.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_single_message } from "./list_single_message.mjs";
export function git_commit_map_name_after(read, commit) {
  "$plain commit";
  "What one rewrite renamed a commit to, or nothing when that rewrite's record does not mention it.";
  "★ NOT MENTIONED AND AMBIGUOUS ARE HELD APART, BECAUSE ONLY ONE OF THEM IS ORDINARY. A record lists every commit the repository held when that rewrite ran, so a name it does not mention is a name from some other state of the repository - which is exactly what walking a series of records looks like from inside any one of them, and so is no kind of failure: nothing comes back and the walk carries the name on unchanged. A shortened name matching two commits is the other thing entirely. It cannot be answered at all, and answering it anyway - by taking whichever matched first - moves a reference onto a different commit and calls it migrated. So that one stops.";
  arguments_assert(arguments, 2);
  let matching = git_commit_map_names_matching(read, commit);
  let missing = list_empty_is(matching);
  if (missing) {
    return null;
  }
  let name = property_get(read, "name");
  let only = list_single_message(
    matching,
    "this shortened commit name is the beginning of more than one commit in " +
      name +
      ", so there is no one commit it was renamed to - write the name out further and ask again",
  );
  let old_to_new = property_get(read, "old_to_new");
  let after = property_get(old_to_new, only);
  return after;
}
