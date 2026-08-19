import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { path_join } from "./path_join.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { not } from "./not.mjs";
export async function storage_function_folder_backup(f_name) {
  "Takes a copy of one function's stored files before anything rewrites them, because that folder is not in git and a sweep that goes wrong there has nothing to go back to.";
  "It exists as a command rather than as a habit of copying by hand. The copying was already being done, correctly, by whoever remembered - and every one of those was a line the human had to read and approve, because a plain copy can write over any file on this machine and so can never be trusted in advance. A command that takes a function's name and copies that one folder to one place is the same work with its dangerous half removed, so it can be approved once and never asked about again.";
  "The copy is stamped with the moment it was taken and never replaces an earlier one. A single slot would be worse than no backup at all: run again after the sweep it was guarding, it would overwrite the only good copy with the damaged one, and the loss would look exactly like a backup being kept up to date.";
  "A missing source folder is reported rather than thrown. The stored files sit on a removable drive, so it not being there is the ordinary state of a machine with the drive unplugged, and that is a thing to be told plainly rather than a thing that broke.";
  "The number of files copied is handed back, because a copy that silently found an empty folder and a copy that saved four hundred files both finish without complaint and only the count tells them apart.";
  let source = storage_function_folder_path(f_name);
  let there = await file_exists(source);
  let absent = not(there);
  if (absent) {
    let missing = {
      f_name,
      source,
      backup: "",
      files: 0,
      copied: false,
      said: "there is no such stored folder here - either the name is not one that stores anything, or the drive holding it is not mounted",
    };
    return missing;
  }
  let stamp = date_now_file();
  let inside = path_join(["storage_backup", f_name, stamp]);
  let backup = folder_gitignore_join(inside);
  let skipped = [];
  await folder_copy_fresh(source, backup, skipped);
  let names = await folder_read_files(backup);
  let r = {
    f_name,
    source,
    backup,
    files: names.length,
    copied: true,
  };
  return r;
}
