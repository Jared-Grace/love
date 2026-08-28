import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { app_code_lesson_family_roots } from "./app_code_lesson_family_roots.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_lesson_telling_shapes_missing } from "./app_code_lesson_telling_shapes_missing.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_code_lesson_telling_shapes_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no lesson of the code app asks about a shape of line its own telling never showed.");
  ("The finer of the two checks that hold a lesson's telling against its own question bank. The other asks whether an operator was ever shown; this one asks whether a line was ever shown written the way the questions write it.");
  ("Four marks make up the shape, and any one of them going unshown fails the lesson. Whether a line with more than one operator in it stands bracketed or flat. Whether it writes one operator over and over or mixes two of them. Which end a true or a false sits at. What kinds of thing stand either side of the operators - a number, a value, a name. They are separate faults and the report names whichever it found, because a learner shown false on the left and asked about false on the right is stuck on the move, not on the brackets.");
  ("This is the check the reported fault needed, and the one the coarser check could not make. A person read lesson eighty-nine, saw false !== (3 === 3) explained and 2 !== 2 === false asked, and named both differences in those words: the brackets had gone, and the false had crossed to the other side. Both lines write === and !== and nothing else, so a check over symbols passes them both.");
  ("Zero is the ratchet and there is no baseline file. Measured 2026-08-28 over all thirty-two lessons, with all four marks in: none. A baseline would only record a debt that does not exist.");
  ("Proved to fire before it was believed, because a check that names nothing says the same word whether nothing is wrong or nothing was looked at. Every mark was kept only once a pair of lines was found that the others call identical. Brackets: false !== (3 === 3) against 2 !== 2 === false. Side: (3 === 3) !== false against the same line the other way round. Kind: 3 === 5 against divisor === 0. Mix: 2 === 2 === 2 against 2 !== 2 === 2, which the other three all read as a flat line of numbers with no value at either end. Handed === is not the same as ==, a sentence about code rather than a line of it, all four answer with nothing.");
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
    "a lesson of the code app asks about a line written a way its own telling never showed - bracketed against flat, one operator repeated against two mixed, a true or false at one end against the other, or a kind of operand never put there before. the lesson is named above, beside what it asks and what it shows";
  list_empty_is_assert_json(offenders, {
    hint,
  });
  let r = {
    walked,
    unjudged: unjudged_count,
  };
  return r;
}
