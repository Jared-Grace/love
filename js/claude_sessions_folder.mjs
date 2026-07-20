import { homedir } from "os";
import { path_join } from "./path_join.mjs";
// Where Claude Code keeps one .jsonl transcript per conversation for THIS repo.
//
// The folder name is the project path with every non-alphanumeric character
// turned into "-", so /home/j/repos/love becomes -home-j-repos-love. Derived
// from the cwd rather than hardcoded, so the restore works from any repo.
export function claude_sessions_folder() {
  let current = process.cwd();
  let slug = current.replace(/[^a-zA-Z0-9]/g, "-");
  let folder = path_join([homedir(), ".claude", "projects", slug]);
  return folder;
}
