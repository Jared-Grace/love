import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function dev_message_log_path() {
  "Where messages sent from a page served on the local address are written down. In the ignored folder: a local test inbox, not shared history.";
  let name = "dev_messages.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
