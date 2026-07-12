import { path_ending_add } from "./path_ending_add.mjs";
import { file_backup_path_ending } from "./file_backup_path_ending.mjs";
export function file_backup_path(file_path) {
  let ending = file_backup_path_ending();
  let combined = path_ending_add(file_path, ending);
  return combined;
}
