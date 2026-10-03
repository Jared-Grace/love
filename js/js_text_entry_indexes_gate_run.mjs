import { js_text_entry_indexes_cases } from "./js_text_entry_indexes_cases.mjs";
import { add } from "./add.mjs";
import { js_text_entry_indexes } from "./js_text_entry_indexes.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function js_text_entry_indexes_gate_run() {
  "Gate: finding a list entry inside a line of source has to answer the same on both shapes the formatter writes a verse in. Throws so the dispatcher seam exits nonzero.";
  "IT GUARDS A READING THAT WAS SILENTLY HALF RIGHT FOR MONTHS. Matching whole trimmed lines answered every long verse correctly and every short one not at all, and nothing anywhere went red - the draw simply refused a word that was plainly in the file. A wrong answer that looks like a refusal is the shape no ratchet catches, because the refusal is a thing this repo does thousands of times a day on purpose.";
  "HOW MANY CASES WERE OPENED IS COUNTED AS THEY ARE OPENED, NOT READ OFF THE LIST BEFORE THE LOOP. The list is written out in the file, so its length is the same number on the run that read every case and on a run where the loop never turned - and that number was standing beside a word that promises the reading. Counted a step at a time, it can only say what was actually looked at, which is the one thing it was there to say.";
  let cases = js_text_entry_indexes_cases();
  let offenders = [];
  let walked = 0;
  for (let one of cases) {
    walked = add(walked, 1);
    let got = js_text_entry_indexes(one.line, one.spelled);
    let same = json_equal(got, one.spots);
    if (not(same)) {
      list_add(offenders, {
        line: one.line,
        spelled: one.spelled,
        wanted: one.spots,
        got,
      });
      console.log("entry indexes  " + one.spelled + "  in  " + one.line);
    }
  }
  console.log("entry index defects: " + offenders.length);
  if (list_empty_not_is(offenders)) {
    throw new Error(
      "js text entry indexes gate: " +
        offenders.length +
        " lines answered with positions the case does not expect",
    );
  }
  let r = {
    walked,
    offenders: 0,
  };
  return r;
}
