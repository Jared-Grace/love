import { arguments_assert } from "./arguments_assert.mjs";
import { folder_licenses_orphaned } from "./folder_licenses_orphaned.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function folder_licenses_orphaned_delete(folder) {
  "$plain folder";
  "Takes away every attribution file in one folder whose own script is gone, and then asks again whether any are left.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, for the same reason its neighbour does - the folder is written into by builds that do not wait, so a list read a moment earlier can name a file that has since been given its script back.";
  "Taking one of these away throws nothing away that is owed to anybody. What it carries is the naming of who wrote the code in one particular script, and that script is not there; there is nothing left in the folder for it to be the attribution of.";
  "The second reading is the proof and not a courtesy, exactly as next door: a removal that quietly did nothing leaves a folder that looks just like one it cleared.";
  "do NOT grant. It works out for itself which files to remove, and the set it acts on is not visible in the words that start it.";
  arguments_assert(arguments, 1);
  let orphaned = await folder_licenses_orphaned(folder);
  let f_paths = list_map_property(orphaned, "f_path");
  async function folder_licenses_orphaned_delete_lambda(f_path) {
    await file_delete(f_path);
  }
  await list_map_unordered_async(
    f_paths,
    folder_licenses_orphaned_delete_lambda,
  );
  let after = await folder_licenses_orphaned(folder);
  let r = {
    folder,
    deleted: list_size(f_paths),
    left: list_size(after),
  };
  return r;
}
