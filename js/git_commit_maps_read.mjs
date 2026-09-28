import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_maps_paths } from "./git_commit_maps_paths.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { git_commit_map_read } from "./git_commit_map_read.mjs";
export async function git_commit_maps_read() {
  "Every saved rewrite record, read, in the order the rewrites happened.";
  "Read once and handed on rather than read per question, because each record is around seven megabytes and a migration asks about hundreds of names. Whatever wants to translate a list of names loads this once and walks each name through the answer.";
  arguments_assert(arguments, 0);
  let paths = await git_commit_maps_paths();
  let reads = await list_map_async(paths, git_commit_map_read);
  return reads;
}
