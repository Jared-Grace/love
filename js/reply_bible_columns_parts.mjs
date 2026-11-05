import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function reply_bible_columns_parts(columns) {
  "Columns turned into the parts of a rule: a run of words every Bible has becomes one part with words said in order, and anything else is a part with the choice sorted, so that the same choice in two verses is the same part.";
  let parts = [];
  let run = [];
  function run_finish() {
    if (greater_than(run.length, 0)) {
      parts.push({
        run,
      });
      run = [];
    }
  }
  for (let column of columns) {
    if (not(column.optional) && equal(column.words.length, 1)) {
      run.push(column.words[0]);
    } else {
      run_finish();
      parts.push({
        choice: [...column.words].sort(),
        optional: column.optional,
      });
    }
  }
  run_finish();
  return parts;
}
