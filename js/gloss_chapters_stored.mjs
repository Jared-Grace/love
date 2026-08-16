import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
export async function gloss_chapters_stored(fn) {
  "The name of every chapter one gloss store holds, taken from the files it has written rather than from any list of what it ought to hold.";
  "Asking the folder is what lets a sweep cross a store whose contents nobody wrote down, and it is also what keeps a sweep and a rewrite pointed at exactly the same set - the one that exists.";
  "A store with no folder yet answers with nothing rather than failing, because a question about a store nobody has written to has an answer and it is none.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let r = list_map(file_names, file_name_json_name);
  return r;
}
