import { path_join } from "./path_join.mjs";
import { claude_temp_folder } from "./claude_temp_folder.mjs";
export function notification_log_path() {
  "Where the notification hook records each moment a session waited on the human.";
  "The hook cannot ask this - it runs on its own as a bare process, with nothing of this repo loaded - so the same place is written out there as well, and the check that exercises the hook reads the hook's own text and insists the two say the same thing rather than taking it on trust.";
  "The folder is asked for rather than written out here, so that the part naming this repo follows the repo if it is ever moved.";
  let folder = claude_temp_folder();
  let p = path_join([folder, "notifications.jsonl"]);
  return p;
}
