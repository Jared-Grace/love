import { arguments_assert } from "./arguments_assert.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_memory } from "./folder_memory.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { not } from "./not.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
import { equal } from "./equal.mjs";
export async function folder_public_root_queue_is(file_path) {
  "$plain file_path";
  "Whether a path names a file lying directly at the top of the published folder a sending would actually walk";
  "Its first predecessor asked only whether the part of the path before the last was the word public, which answers yes for every folder of that name anywhere. Both frozen copies have one, and one of them is built into - so a rule meant for the folder a sending walks was being asked about copies nothing is ever sent out of.";
  "A copy living in memory is turned down before anything else is asked, because that is the whole of what separates the two. The copies are put where nothing survives a restart precisely so that they can be thrown away and made again, and a folder that can be thrown away is not one anybody sends from. Asked the other way round - by which repo this is - a copy answers the same as the real one, because it is a copy of it.";
  "That matters here rather than only in principle. A copy runs its own commit's dispatcher from inside itself, so a path worked out from where the run is standing names the copy's own folders - and the copy carries a committed note about the real folder's pieces. Without this, building an app inside the copy would be refused for making that note wrong, when the note was never about anything the copy holds.";
  "The path is reduced to a whole one first, so a name spelled from here and the same name spelled from the root come back the same. Nothing is asked of the disk: what a path means is worked out from the text alone, and the file about to be written may not be there yet.";
  arguments_assert(arguments, 1);
  let absolute = await path_resolve(file_path);
  let memory = folder_memory();
  let lasting = text_starts_with_not(absolute, memory);
  if (not(lasting)) {
    return false;
  }
  let folder = folder_public_absolute();
  let file_name = path_base(absolute);
  let expected = path_join([folder, file_name]);
  let root = equal(absolute, expected);
  return root;
}
