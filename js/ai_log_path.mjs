import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function ai_log_path() {
  ("Lives in the ignored folder: it is a local record of what was run, not shared");
  ("history, so it never adds noise to a commit.");
  let name = "ai_log.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
