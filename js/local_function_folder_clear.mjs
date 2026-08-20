import { file_delete } from "./file_delete.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { function_import } from "./function_import.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { local_function_folder_backup } from "./local_function_folder_backup.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
export async function local_function_folder_clear(f_name) {
  "Empty one store of everything in it, keeping a copy, so what the store's own writer puts there next is all that is in it.";
  "THE COPY IS TAKEN HERE rather than asked of the caller, because a clear is the one change that leaves nothing behind to read afterwards. Its twin can be called on its own before any sweep; a clear that could be called without it would be an undo nobody remembered to take, at the exact moment it was the only one that mattered.";
  "It is for a store whose SHAPE has moved on. A store is addressed by a word, and the function behind that word can be rewritten to file its work differently - by person where it once filed by plant. What the old shape wrote then sits in the folder forever, because nothing writes over a file it would never have named, and the next reader of the folder gets both shapes at once with nothing saying which is which.";
  "It answers with what it copied and what it removed, and the two should agree. A count of nothing is what a store nobody has written to looks like, and it looks the same from outside afterwards - so the numbers are the only thing separating a real clear from a folder spelled after nothing at all.";
  "The name is looked up rather than used as text, for the reason its twin gives: the folder is spelled after the function, and a name arriving from a command line is not one.";
  let backup = await local_function_folder_backup(f_name);
  let copied = property_get(backup, "files");
  let fn = await function_import(f_name);
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  for (let file_name of file_names) {
    let file_path = path_join([folder, file_name]);
    await file_delete(file_path);
  }
  let removed = list_size(file_names);
  let r = {
    folder,
    copied,
    removed,
    backup: property_get(backup, "target"),
  };
  return r;
}
