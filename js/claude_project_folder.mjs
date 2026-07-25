import os from "os";
import { path_join } from "./path_join.mjs";
export function claude_project_folder() {
  "The directory Claude Code keeps for this repo: one session transcript per session, plus the memory symlink. The machine-specific slug lives here once, so tooling that READS transcripts and tooling that WRITES memory cannot drift onto two spellings of the same place.";
  let home = os.homedir();
  let folder = path_join([home, ".claude", "projects", "-home-j-repos-love"]);
  return folder;
}
