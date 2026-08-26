import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned } from "./public_chunks_orphaned.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { folder_chunks_orphaned_delete } from "./folder_chunks_orphaned_delete.mjs";
import { list_add } from "./list_add.mjs";
import { list_sum } from "./list_sum.mjs";
export async function public_chunks_orphaned_delete() {
  "Takes away every extra script file left over in any of the three folders a build writes into, and says for each folder how many went and how many are still there afterwards.";
  "IT FINDS ITS OWN FOLDERS AND ITS OWN FILES. Clearing one folder at a time is the same command run over a list somebody typed, and a typed list is a guess about which folders a build writes into that goes stale the moment one is added. The folders are taken from the same reading that names the leftovers, so there is one place that knows.";
  "Each folder is cleared by the single-folder removal rather than by a removal written again here, so the reading and the removal stay in the same breath for every folder - a file that has become wanted since the folders were listed is safe, because the list that decides is made inside that folder's own clearing.";
  "The counts left over are the proof. A clearing that quietly did nothing leaves a folder looking exactly like one it cleared, so the second reading each folder does is what tells the two apart, and it is expected to be nothing at all.";
  "Nothing is sent anywhere. What is being served goes on being served until somebody sends the folder out, and that is a decision about what people have in front of them.";
  "do NOT grant. It works out for itself which files to remove, which is precisely what a standing approval must never be given to - the set it acts on is not visible in the words that start it.";
  arguments_assert(arguments, 0);
  let before = await public_chunks_orphaned();
  let all = property_get(before, "folders");
  let folders = list_map_property(all, "folder");
  let cleared = [];
  for (let folder of folders) {
    let one = await folder_chunks_orphaned_delete(folder);
    list_add(cleared, one);
  }
  let deleted_counts = list_map_property(cleared, "deleted");
  let deleted = list_sum(deleted_counts);
  let left_counts = list_map_property(cleared, "left");
  let left = list_sum(left_counts);
  let r = {
    deleted,
    left,
    bytes: property_get(before, "bytes"),
    folders: cleared,
  };
  return r;
}
