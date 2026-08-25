import { arguments_assert } from "./arguments_assert.mjs";
import { file_delete } from "./file_delete.mjs";
import { folder_chunks_orphaned } from "./folder_chunks_orphaned.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function folder_chunks_orphaned_delete(folder) {
  "$plain folder";
  "Takes away every extra script file in one folder that nothing there sends for, and then asks again whether any are left.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE. A caller passing a list would be passing a list somebody read a moment earlier, and the folder is written into by builds that do not wait - so the list would name files that have since become wanted, which is the one mistake a removal cannot be sorry for afterwards. Asked here, the reading and the removal are the same breath.";
  "The second reading is the proof and not a courtesy. A removal that quietly did nothing leaves a folder that looks exactly like one it cleared, and the count that comes back is the only thing that tells the two apart.";
  "Nothing that was reached is touched, so the second reading is expected to be nothing at all: a file nothing sends for cannot be what made another file wanted.";
  "do NOT grant. It works out for itself which files to remove, which is precisely what a standing approval must never be given to - the set it acts on is not visible in the words that start it.";
  arguments_assert(arguments, 1);
  let orphaned = await folder_chunks_orphaned(folder);
  let f_paths = list_map_property(orphaned, "f_path");
  async function delete_lambda(f_path) {
    await file_delete(f_path);
  }
  await list_map_unordered_async(f_paths, delete_lambda);
  let after = await folder_chunks_orphaned(folder);
  let r = {
    folder,
    deleted: list_size(f_paths),
    left: list_size(after),
  };
  return r;
}
