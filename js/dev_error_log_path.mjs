import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function dev_error_log_path() {
  "Where errors reported by a page on a /dev/ path are written down. In the ignored folder: it is a local record of what broke on one machine while somebody was testing, not shared history.";
  let name = "dev_errors.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
