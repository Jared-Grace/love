import os from "os";
import { path_join } from "./path_join.mjs";
export function claude_transcripts_folder() {
  ("The folder holding this project's Claude Code session transcripts - one");
  (".jsonl per session. Sibling of the memory dir under the same project slug.");
  let folder = path_join([
    os.homedir(),
    ".claude",
    "projects",
    "-home-j-repos-love",
  ]);
  return folder;
}
