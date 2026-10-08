import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function dev_trace_log_path() {
  "Where the traces /dev/ pages kept on a device are written down once they reach this machine. In the ignored folder: a local record of one testing session, not shared history.";
  let name = "dev_trace.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
