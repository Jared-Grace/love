import { qa_promote_steps_log_path } from "./qa_promote_steps_log_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { list_map } from "./list_map.mjs";
import { qa_promote_steps_row_read } from "./qa_promote_steps_row_read.mjs";
import { list_size } from "./list_size.mjs";
import { list_reverse } from "./list_reverse.mjs";
export async function qa_promote_steps_log_report() {
  "Where the time went each time an app was prepared to go out on this machine, step by step, newest first.";
  "A run that failed is here too, with the step it died in marked as unfinished, because that is the run somebody most wants explained.";
  "These durations are read beside how busy the machine was, not as a limit: a gate failing on a slow step would fail on a busy afternoon, so nothing here decides anything.";
  let f_path = qa_promote_steps_log_path();
  let rows = await file_read_json_initialize(f_path, []);
  let reads = list_map(rows, qa_promote_steps_row_read);
  let runs = list_size(reads);
  list_reverse(reads);
  let r = {
    runs,
    runs_newest_first: reads,
  };
  return r;
}
