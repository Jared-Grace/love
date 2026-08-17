import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { function_import } from "./function_import.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { path_join } from "./path_join.mjs";
export async function local_function_folder_backup(f_name) {
  "Keep a copy of everything one store has written, before something rewrites it.";
  "Git is what makes every other mistake here survivable, and it has never seen these folders. A sweep that rewrites one has no undo at all, so the copy is the undo - and it has to be taken before the sweep rather than after, which is the one moment nobody is thinking about it. That is the whole reason this has a name: a copy nobody can spell is a copy nobody takes.";
  "It answers with how many files it copied so the caller can tell a real backup from an empty one. A store folder nobody has written to reads as no files rather than as a failure, and the two look identical from the outside afterwards - so the count is the only thing that separates them, and it is worth reading before trusting the sweep that follows.";
  "The name is looked up rather than used as text, because the folder is spelled after the function and a name arriving from a command line is not one. Spelled after text, the folder comes out named for nothing, and a folder named for nothing is empty - which reads exactly like a store with nothing in it to lose.";
  "Each copy sits under its own moment, so an earlier one is never written over. Backups are cheap and the thing they guard against is finding out too late, so keeping all of them costs disk and keeping one costs the only copy that mattered.";
  let fn = await function_import(f_name);
  let source = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(source);
  let stamp = date_now_file();
  let inner = path_join(["store_backups", f_name, stamp]);
  let target = folder_gitignore_join(inner);
  await folder_exists_ensure(target);
  for (let file_name of file_names) {
    let from = path_join([source, file_name]);
    let to = path_join([target, file_name]);
    await file_copy_overwrite(from, to);
  }
  let files = list_size(file_names);
  let r = {
    source,
    target,
    files,
  };
  return r;
}
