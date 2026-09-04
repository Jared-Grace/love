import { arguments_assert } from "./arguments_assert.mjs";
import { folder_chunks_orphaned } from "./folder_chunks_orphaned.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { folder_licenses_orphaned_delete } from "./folder_licenses_orphaned_delete.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function folder_chunks_orphaned_delete(folder) {
  "$plain folder";
  "Takes away every extra script file in one folder that nothing there sends for, and then asks again whether any are left.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE. A caller passing a list would be passing a list somebody read a moment earlier, and the folder is written into by builds that do not wait - so the list would name files that have since become wanted, which is the one mistake a removal cannot be sorry for afterwards. Asked here, the reading and the removal are the same breath.";
  "The second reading is the proof and not a courtesy. A removal that quietly did nothing leaves a folder that looks exactly like one it cleared, and the count that comes back is the only thing that tells the two apart.";
  "Nothing that was reached is touched, so the second reading is expected to be nothing at all: a file nothing sends for cannot be what made another file wanted.";
  "THE ATTRIBUTION FILES GO IN THE SAME BREATH, AND THEY GO AFTERWARDS. A build writes one beside a script to say who wrote the code inside it, so taking the script away is itself what strands the writing about it - this used to leave a new leftover behind every time it ran, of a kind no reading here counted. Measured on the fourth of September: four scripts weighing fifty-seven kilobytes were cleared out of one folder and twenty-nine attribution files weighing three hundred kilobytes were sitting across two folders, five times the weight of what the sweep was aimed at. Afterwards rather than before, because the ones this run has just made are the point.";
  arguments_assert(arguments, 1);
  let orphaned = await folder_chunks_orphaned(folder);
  let f_paths = list_map_property(orphaned, "f_path");
  async function delete_lambda(f_path) {
    await file_delete(f_path);
  }
  await list_map_unordered_async(f_paths, delete_lambda);
  let after = await folder_chunks_orphaned(folder);
  let licenses = await folder_licenses_orphaned_delete(folder);
  let r = {
    folder,
    deleted: list_size(f_paths),
    left: list_size(after),
    licenses_deleted: property_get(licenses, "deleted"),
    licenses_left: property_get(licenses, "left"),
  };
  return r;
}
