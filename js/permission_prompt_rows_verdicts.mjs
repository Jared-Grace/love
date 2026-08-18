import { permission_label_allowed_is } from "./permission_label_allowed_is.mjs";
import { equal } from "./equal.mjs";
import { guard_check } from "./guard_check.mjs";
export async function permission_prompt_rows_verdicts(rows) {
  "Asks the guard what it decides about one representative command per row, and writes the answer onto the row. A row the guard auto-approves or hard-denies never reached the human at all, so its waits were the command being slow - that is the difference between a suspect and a slow build.";
  "Only the rows handed in are checked, because each check starts a fresh process: cheap for the dozen rows anyone reads, minutes for every distinct command in a day.";
  "A row with no command is not a shell call, and the guard has nothing to say about one. Those are answered instead by looking for a rule spelled exactly like the row's own label, which the labels are built to make possible. That can only ever prove a yes, so a row left blank means unanswered rather than refused.";
  for (let row of rows) {
    let sample = row.sample;
    if (equal(sample, "")) {
      let allowed = await permission_label_allowed_is(row.label);
      if (allowed) {
        row.verdict = "allow";
      }
      continue;
    }
    let checked = await guard_check(sample);
    row.verdict = checked.decision;
  }
  return rows;
}
