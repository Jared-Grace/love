import { path_join } from "./path_join.mjs";
import { claude_project_folder } from "./claude_project_folder.mjs";
export function memory_folder() {
  "The single source of truth for the persistent memory directory Claudes write to - the one loaded into context each session. Other memory tooling should derive its paths from here rather than retyping the machine-specific slug.";
  let project = claude_project_folder();
  let folder = path_join([project, "memory"]);
  return folder;
}
