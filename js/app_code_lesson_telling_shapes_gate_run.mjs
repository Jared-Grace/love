import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { app_code_lesson_family_roots } from "./app_code_lesson_family_roots.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_lesson_telling_shapes_missing } from "./app_code_lesson_telling_shapes_missing.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ternary } from "./ternary.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_code_lesson_telling_shapes_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no lesson of the code app asks about a shape of line its own telling never showed.");
  ("The finer of the two checks that hold a lesson's telling against its own question bank. The other asks whether an operator was ever shown; this one asks whether a line was ever shown written the way the questions write it.");
  ("Two marks make up the shape, and either one going unshown fails the lesson. Whether a line with more than one operator in it stands bracketed or flat, and which end a true or a false sits at. They are separate faults and the report names whichever it found, because a learner shown false on the left and asked about false on the right is stuck on the move, not on the brackets.");
  ("This is the check the reported fault needed, and the one the coarser check could not make. A person read lesson eighty-nine, saw false !== (3 === 3) explained and 2 !== 2 === false asked, and named both differences in those words: the brackets had gone, and the false had crossed to the other side. Both lines write === and !== and nothing else, so a check over symbols passes them both.");
  ("Zero is the ratchet and there is no baseline file. Measured 2026-08-28 over all thirty-two lessons, with both marks in: none. A baseline would only record a debt that does not exist.");
  ("Proved to fire before it was believed, because a check that names nothing says the same word whether nothing is wrong or nothing was looked at. Handed the two lines the reader reported it answers bracketed with the value left, and flat with the value right. Handed (3 === 3) !== false, which differs from the telling line in the side alone, it answers bracketed with the value right - so the two marks are shown to move apart. Handed 3 === 5 it answers with nothing, one operator having no order to argue about and no value at either end.");
  ("The both-sides parentheses lesson keeps its flat line in a card of its own: read on its own the lesson file shows bracketed and the card shows flat, and a version of the split that stopped short of following the call into that card named the lesson - which is the whole thing this gate says when it goes red.");
  ("A lesson whose telling comes out with no shapes at all is counted apart and named apart. It is not a pass: it is this gate saying it could not find where the lesson does its telling, and the number is printed every run so a let-off can never grow quietly.");
  ("How many lessons were walked travels out with the verdict. Nothing wrong is what a passing run says, and it is also what a run that reached no lesson at all would say, and the walk is the only part of the answer that falls in the second case.");
  let names = await repo_love_functions_names();
  let roots = await app_code_lesson_family_roots(names);
  let walked = list_size(roots);
  let reports = await app_code_lesson_telling_shapes_missing();
  let offenders = [];
  let unjudged = [];
  for (let report of reports) {
    let telling = property_get(report, "telling");
    let blind = list_empty_is(telling);
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
      "NEVER SHOWN WRITTEN THAT WAY  " +
        lesson +
        "  asks " +
        missing +
        "  shows " +
        telling,
    );
  }
  let unjudged_count = list_size(unjudged);
  console.log(
    "lessons " +
      walked +
      "  offenders " +
      list_size(offenders) +
      "  not judged " +
      unjudged_count,
  );
  let hint =
    "a lesson of the code app asks about a line written bracketed or flat, or with a true or false at an end, when its own telling only ever showed it the other way - the lesson is named above, beside what it asks and what it shows";
  list_empty_is_assert_json(offenders, {
    hint,
  });
  let r = {
    walked,
    unjudged: unjudged_count,
  };
  return r;
}
