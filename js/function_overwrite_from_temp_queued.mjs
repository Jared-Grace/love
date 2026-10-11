import { not_equal } from "./not_equal.mjs";
import { file_read } from "./file_read.mjs";
import { function_overwrite_from_temp_multiple } from "./function_overwrite_from_temp_multiple.mjs";
import { scripts_temp_delete } from "./scripts_temp_delete.mjs";
export async function function_overwrite_from_temp_queued() {
  "Writes over the repo's functions every draft named in the throwaway folder's queue file, one name to a line, in the order listed, then takes the queue away.";
  "It takes nothing on purpose. A command handed to the human to paste must be one short line: a list of names wraps on the way through the terminal and lands as two commands. So the list lives in a file the drafter writes, and the human types the same few words every time.";
  "The drafter queues only drafts the safe overwrite refused, so each line is a function the human is choosing to let through by running this; the names it wrote over come back in the answer.";
  let text = await file_read("scripts/temp/overwrite_queue.txt");
  function lambda(line) {
    let r = line.trim();
    return r;
  }
  function lambda2(line) {
    let neq = not_equal(line, "");
    return neq;
  }
  let names = text.split("\n").map(lambda).filter(lambda2);
  let names_comma = names.join(",");
  let outputs = await function_overwrite_from_temp_multiple(names_comma);
  await scripts_temp_delete("overwrite_queue.txt");
  let r2 = {
    names,
    outputs,
  };
  return r2;
}
