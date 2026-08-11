import { fileURLToPath } from "url";
import { path_directory } from "./path_directory.mjs";
export function folder_repo_love() {
  "The folder this repo's code is checked out in, spelled from the root. Worked out from this file's own place on disk, so it means the same thing whatever folder the process was started in.";
  "Asking the process where it is standing would answer a different question - where somebody happened to run the command - and every path built on that answer moves when they run it from somewhere else.";
  "The folder above the one holding this file, deliberately, rather than the nearest folder holding a .git. The gates run inside a frozen copy of the tree that carries no .git at all, and a copy of the repo is still the repo for anything asking this.";
  let f_path = fileURLToPath(import.meta.url);
  let folder_js = path_directory(f_path);
  let folder = path_directory(folder_js);
  return folder;
}
