import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_maps_read } from "./git_commit_maps_read.mjs";
import { git_commit_name_after_maps } from "./git_commit_name_after_maps.mjs";
export async function git_commit_name_current(commit) {
  "$plain commit";
  "What a commit name written down at any time in the past is called now - one name in, the renamings it went through and the name it wears today out.";
  "This is the whole of the question a person asks when they find an old commit name in a note or a stored file and want to know whether it still means anything. It loads every saved rewrite record and walks the name through all of them in order.";
  "A name that no rewrite ever touched comes back unchanged, with nothing in its steps. That answer is worth as much as a renaming, because the other reading of an unchanged name - that the records were not consulted - is the one thing this rules out.";
  "Whether the answer names a commit that is actually in a given repository is a separate question and a separate asking, because a name can be current and still belong to a repository other than the one being asked about.";
  arguments_assert(arguments, 1);
  let reads = await git_commit_maps_read();
  let walked = git_commit_name_after_maps(reads, commit);
  return walked;
}
