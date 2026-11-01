import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
export async function crontab_list() {
  "the jobs this machine runs on a schedule, as crontab prints them - read only";
  "crontab itself holds no grant because its other forms replace or delete the whole schedule; this fixed `-l` is the one form that only reads, so it can be granted by name";
  "with no schedule at all crontab exits nonzero, which is an answer rather than a failure, so the result is then empty";
  let r = await command_line_code_ignore_stdout("crontab -l");
  return r;
}
