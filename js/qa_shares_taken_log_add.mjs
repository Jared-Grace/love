import { arguments_assert } from "./arguments_assert.mjs";
import { qa_shares_taken_log_path } from "./qa_shares_taken_log_path.mjs";
import { list_add } from "./list_add.mjs";
import { file_json_transform_initialize } from "./file_json_transform_initialize.mjs";
export async function qa_shares_taken_log_add(row) {
  "$plain row";
  arguments_assert(arguments, 1);
  ("Adds one run's costs to this machine's local history of them, and hands back where it wrote.");
  ("★ IT APPENDS AND NEVER REWRITES, SO THE ORDER IN THE FILE IS THE ORDER THE RUNS HAPPENED IN. Nothing here sorts, because the writer is the only thing that knows when its own run finished and a reader handed a sorted file cannot tell a run that was slow from a run that merely landed late. Any question about which run came first is answered by the time in the row rather than by where it sits.");
  ("★ THE FILE IS READ AGAIN INSIDE THE WRITING RATHER THAN A COPY TAKEN EARLIER BEING HANDED BACK, because a run takes tens of minutes and about ten of us share this one folder. Only this run's own row is added, so nothing already in the history is ever this run's to write. This is the same care its neighbour holding the judged verdicts takes, for the same reason.");
  ("★ IT MUST NEVER BE ALLOWED TO BREAK A JUDGING, WHICH IS A RULE FOR WHOEVER CALLS IT RATHER THAN SOMETHING THIS CAN ARRANGE. What it is recording is machine weather, and the run it is recording has already done the whole of the expensive work by the time this is reached - so a failure to write a note about a run that succeeded must cost the note and never the run. A caller wraps it in the catching one, and that wrapping is not tidiness: unwrapped, a full disk would turn every green run into a thrown one.");
  ("Starting from an empty list rather than from nothing is what makes the first run on a machine the same as every later one. There is no separate case for the history not existing yet, so no reader has to ask whether it does.");
  let f_path = qa_shares_taken_log_path();
  function row_add(rows) {
    list_add(rows, row);
  }
  await file_json_transform_initialize(f_path, [], row_add);
  return f_path;
}
