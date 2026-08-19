import { fn_name } from "./fn_name.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export async function ebible_versions_downloaded() {
  "Every translation whose zip has been unpacked onto this machine - named by its folder and in the order of the names.";
  "Asked of the disk rather than of the catalogue, because a catalogue entry that never downloaded has no licence page to read and so nothing here can be said about it.";
  let f_name = fn_name("ebible_version_download");
  let folder = storage_function_folder_path(f_name);
  let names = await folder_read(folder);
  list_sort_text(names);
  return names;
}
