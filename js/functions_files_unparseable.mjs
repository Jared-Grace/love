import { arguments_assert } from "./arguments_assert.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { functions_files_unparseable_from_paths } from "./functions_files_unparseable_from_paths.mjs";
export async function functions_files_unparseable() {
  "Every function file in these repos that will not read in as code right now, each with its path and what the parser said about it.";
  "One half-saved file makes the whole index of functions unbuildable, and nearly everything here is built on that index. So the failure is never local: a search, a gate, a sweep, a judging of a commit - all of them die, all of them with the same error, and none of them names the file.";
  "It is the shape of the failure that costs, not the fixing. The fixing is a minute. Twice in two days a run of the gates went twelve minutes and then died on this, and both times the reading that followed was a hunt with no starting point - the error names a line number in a file it does not name.";
  "So this answers the one question that hunt is asking, and answers it in seconds, because it reads files and parses them and does nothing else. Nothing here builds the index, which is the very thing that cannot be built while a file is torn.";
  "It reports rather than repairs, and there is no repair to offer. A torn file is either a peer mid-save, in which case the answer is to wait and ask again, or a half-finished edit that got committed, in which case what to put there is a judgement about what its author meant.";
  "The second of those two is now caught by a gate before anybody has to hunt for it at all, and this stayed as it is because the first one never can be: a gate is judged on a commit, and a peer part way through saving a file has not made one.";
  arguments_assert(arguments, 0);
  let f_paths = await functions_paths();
  let torn = await functions_files_unparseable_from_paths(f_paths);
  return torn;
}
