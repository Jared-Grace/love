import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { app_code_lesson_telling_symbols_missing } from "./app_code_lesson_telling_symbols_missing.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
export async function app_code_lesson_telling_symbols_gate_run() {
  "QA gate: no lesson of the code app asks about an operator its own telling never showed.";
  "Three lessons were caught doing it, one of them by a person reading the screen and saying so, and each one cost somebody a reading of the lesson to find. A learner meeting an unshown symbol has nothing to be wrong about - the lesson simply never said - so this is a teaching fault rather than a bug, which is exactly the kind nothing else here would ever go red on.";
  "Zero is the ratchet and there is no baseline file, because the last of the three was fixed before this was written and the count has been nothing ever since. A baseline would only record a debt that does not exist.";
  "A lesson whose telling comes out with no symbols at all is counted apart and named apart. It is not a pass: it is this gate saying it could not find where the lesson does its telling, and the number is printed every run so a let-off can never grow quietly.";
  let reports = await app_code_lesson_telling_symbols_missing();
  let offenders = [];
  let unjudged = [];
  for (let report of reports) {
    let blind = property_list_empty_is(report, "telling");
    let side = ternary(blind, unjudged, offenders);
    list_add(side, report);
  }
  for (let report of unjudged) {
    let lesson = property_get(report, "lesson");
    console.log("NO TELLING FOUND  " + lesson);
  }
  for (let report of offenders) {
    let lesson = property_get(report, "lesson");
    let missing = property_list_join_comma(report, "missing");
    let telling = property_list_join_comma(report, "telling");
    console.log(
      "NEVER SHOWN  " + lesson + "  asks " + missing + "  shows " + telling,
    );
  }
  console.log(
    "offenders " + offenders.length + "  not judged " + unjudged.length,
  );
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "lesson telling gate: " +
      offenders.length +
      " lessons ask about an operator their telling never shows";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
    unjudged: unjudged.length,
  };
  return result;
}
