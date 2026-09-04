import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_memory } from "./folder_memory.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { not } from "./not.mjs";
import { folder_public_root_is } from "./folder_public_root_is.mjs";
export async function folder_public_root_queue_is(file_path) {
  "$plain file_path";
  "Whether a path names a file lying directly at the top of the published folder a sending would actually walk";
  "Its first predecessor asked only whether the part of the path before the last was the word public, which answers yes for every folder of that name anywhere. Both frozen copies have one, and one of them is built into - so a rule meant for the folder a sending walks was being asked about copies nothing is ever sent out of.";
  ("A copy living in memory is turned down before anything else is asked, because that is the whole of what separates the two. The copies are put where nothing survives a restart precisely so that they can be thrown away and made again, and a folder that can be thrown away is not one anybody sends from. Asked the other way round - by which repo this is - a copy answers the same as the real one, because it is a copy of it, and that other question is its own reading now: ",
    fn_name("folder_public_root_is"),
    ".");
  ("THE TURNING DOWN IS THIS CALLER'S REASON AND NOT A FACT ABOUT THE PATH, WHICH IS WHY THE TWO HALVES ARE APART. Anything wanting the position rather than the permission must ask the other one. Borrowing this reading for a question about whether a piece is accounted for reads as no piece being accounted for anywhere a judging runs, because a judging runs in exactly the copy this turns down - measured on the fourth of September, that put an app's own build back in front of it as a leftover and held the sending that would have cleared it.");
  ("That matters here rather than only in principle. A copy runs its own commit's dispatcher from inside itself, so a path worked out from where the run is standing names the copy's own folders - and the copy carries a committed note about the real folder's pieces. Without this, building an app inside the copy would be refused for making that note wrong, when the note was never about anything the copy holds.");
  arguments_assert(arguments, 1);
  let absolute = await path_resolve(file_path);
  let memory = folder_memory();
  let lasting = text_starts_with_not(absolute, memory);
  if (not(lasting)) {
    return false;
  }
  let root = await folder_public_root_is(absolute);
  return root;
}
