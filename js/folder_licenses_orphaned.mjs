import { arguments_assert } from "./arguments_assert.mjs";
import { file_extension_license } from "./file_extension_license.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { path_join } from "./path_join.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { file_size } from "./file_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function folder_licenses_orphaned(folder) {
  "$plain folder";
  "Every attribution file in one folder whose own script is no longer there, each answered beside how big it is.";
  "AN ATTRIBUTION FILE IS NAMED AFTER THE SCRIPT IT SPEAKS FOR, so whether it is a leftover is a question with one right answer and no walking involved - the script is either on the disk beside it or it is not. That is why this is a reading of its own and not part of the walk next door: the walk works out which scripts nothing sends for, which is a hard question, and asking it about a file that is not a script at all would answer nothing.";
  "These are missed by every reading there is, because each one of them asks after scripts. A folder can hold nothing but sound scripts and still be carrying three hundred kilobytes of writing about scripts that were taken away, and be called clean by all of them.";
  "The size is answered here for the same reason the walk next door answers it - what is worth doing about a leftover is a question about bytes.";
  arguments_assert(arguments, 1);
  let extension = file_extension_license();
  let names = await folder_read_files(folder);
  function folder_licenses_orphaned_license_is(file_name) {
    let license = text_ends_with(file_name, extension);
    return license;
  }
  let license_names = list_filter(names, folder_licenses_orphaned_license_is);
  async function folder_licenses_orphaned_entry_lambda(file_name) {
    let f_path = path_join([folder, file_name]);
    let script_name = text_suffix_without(file_name, extension);
    let script_path = path_join([folder, script_name]);
    let gone = await file_exists_not(script_path);
    if (gone) {
      let size = await file_size(f_path);
      let entry = {
        f_path,
        size,
      };
      return entry;
    }
    return null;
  }
  let entries = await list_map_unordered_async(
    license_names,
    folder_licenses_orphaned_entry_lambda,
  );
  let orphaned = list_filter_null_not_is(entries);
  return orphaned;
}
