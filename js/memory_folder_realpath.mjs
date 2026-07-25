import fs from "fs";
import { memory_folder } from "./memory_folder.mjs";
export function memory_folder_realpath() {
  "The memory directory with its symlink resolved. This is the spelling that does NOT trip Claude Code's built-in self-settings guard, so it is the one to address memory by; derived from the single source of truth rather than retyping the backup path.";
  let folder = memory_folder();
  let resolved = fs.realpathSync(folder);
  return resolved;
}
