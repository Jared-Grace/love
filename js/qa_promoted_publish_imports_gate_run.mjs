import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted_publish } from "./qa_promoted_publish.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_promoted_publish_imports_gate_run() {
  "Gate: the sending step may not grow a new thing to depend on. Throws so the dispatcher seam exits nonzero.";
  "★ CHECKING BELONGS WHERE THE PIECES ARE MADE, NOT WHERE THEY ARE SENT. An app is judged against the commit it is built from, and only then are its pieces put in the folder that goes out. By the time anybody sends, that argument is over. All the sending owes is that the pieces standing there are still the pieces that were judged, which is one comparison of what is written down against what is on the disk.";
  "★ THE FAULT THIS EXISTS FOR IS ONE THAT ARRIVES A LITTLE AT A TIME AND LOOKS LIKE CARE EVERY TIME. Each new question asked at the sending reads as prudence on the day it is added, and the cost lands somewhere else entirely: the sending puts out the whole folder in one act, so anything it refuses over, it refuses for every app waiting, including all the ones the new question was never about. Asking the gate verdicts again was one of these. It could learn nothing - a set of pieces cannot be standing there unless it already passed - and it cost eight apps at once, refused over red gates that named no function and had nothing to do with them, three of them carrying real work.";
  "★ SO WHAT IS HELD IS A WHOLE LIST RATHER THAN A RULE ABOUT IT. Anything the sending brings in, it can ask; there is no way to describe in advance the shape of a question that should not be asked here. Naming the four it may bring in turns that into a decision somebody has to make on purpose: adding a fifth means writing it down here, and writing it down here means reading this paragraph first. The list is not a claim that these four are perfect - it is a claim that changing them is not something to do without noticing.";
  "★ A NAME GOING MISSING FAILS IT TOO, WHICH IS THE HALF WORTH KEEPING. Taking a check away from the sending is exactly as large a change as adding one, and it is the one nothing else would notice: the sending would go on working, quietly, having stopped asking whether the pieces still match what was written down. So the two lists have to be the same list, not one inside the other.";
  "It reads what is imported rather than what is called, because an import is unconditional. A question asked behind a condition is still a question the sending now depends on, and reading calls would let one in behind an `if`.";
  arguments_assert(arguments, 0);
  ("The sending is named off the function itself rather than spelled out. What a failed gate says is read for function names and every name found is held back from a deployment, so the one place that turns this name into a word is here, where it is the subject rather than the accusation.");
  let f_name = qa_promoted_publish.name;
  let allowed = [
    fn_name("firebase_apps_frozen_unchanged_assert_deploy"),
    fn_name("firebase_deploy_locked_generic"),
    fn_name("list_empty_is_assert_json"),
    fn_name("qa_promoted_unaccounted"),
  ];
  let found = await function_imports(f_name);
  let offenders = [];
  for (let name of found) {
    let unexpected = list_includes_not(allowed, name);
    if (unexpected) {
      list_add(offenders, {
        added: name,
      });
    }
  }
  for (let name of allowed) {
    let absent = list_includes_not(found, name);
    if (absent) {
      list_add(offenders, {
        missing: name,
      });
    }
  }
  list_empty_is_assert_json(offenders, {
    hint: "the sending step has stopped depending on exactly the four things it is allowed to depend on. an added name means a new question is being asked at sending time - ask it where the app is built and judged instead, because anything refused here is refused for every app waiting in the folder rather than only for the one it concerns. a missing name means a check has been taken away, which is the larger change of the two. if the change is genuinely wanted, write the new list into this gate on purpose",
  });
  let r = {
    imports: list_size(found),
  };
  return r;
}
