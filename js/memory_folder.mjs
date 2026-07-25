import os from "os";
import { path_join } from "./path_join.mjs";
export function memory_folder() {
  "The single source of truth for the persistent memory directory Claudes write to - the one loaded into context each session. Other memory tooling should derive its paths from here rather than retyping the machine-specific slug.";
  let v = os.homedir();
  let folder = path_join([
    v,
    ".claude",
    "projects",
    "-home-j-repos-love",
    "memory",
  ]);
  return folder;
}
