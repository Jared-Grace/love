import { equal } from "./equal.mjs";
import { guard_check } from "./guard_check.mjs";
export async function permission_prompt_rows_verdicts(rows) {
  "Asks the guard what it decides about one representative command per row, and writes the answer onto the row. A row the guard auto-approves or hard-denies never reached the human at all, so its waits were the command being slow - that is the difference between a suspect and a slow build.";
  "Only the rows handed in are checked, because each check starts a fresh process: cheap for the dozen rows anyone reads, minutes for every distinct command in a day.";
  for (let row of rows) {
    let sample = row.sample;
    if (equal(sample, "")) {
      continue;
    }
    let checked = await guard_check(sample);
    row.verdict = checked.decision;
  }
  return rows;
}
