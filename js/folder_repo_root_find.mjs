import path from "path";
import fs from "fs";
export function folder_repo_root_find(start_dir) {
  let dir = start_dir;
  while (true) {
    let git_path = path.join(dir, ".git");
    if (fs.existsSync(git_path)) {
      return dir;
    }
    let parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error("Could not find repo root (.git) above " + start_dir);
    }
    dir = parent;
  }
}
