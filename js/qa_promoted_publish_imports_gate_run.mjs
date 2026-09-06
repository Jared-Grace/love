import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { or } from "./or.mjs";
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
  ("★ THE NAME IS SPELLED RATHER THAN READ OFF THE FUNCTION, BECAUSE IMPORTING THE SUBJECT MADE THIS GATE THROW INSTEAD OF FAIL. Bringing the sending step in to read its own name brought in everything the sending step brings in, and somewhere down there a folder is worked out from whichever repo this machine is pointed at - a question with no answer inside the frozen copy every gate is judged in. A gate that throws writes down no offenders, and a gate naming nobody is counted against every app, so the whole site is held out of every deployment. Spelling the name is also the only way to talk about a function's dependencies without taking them on.");
  let f_name = fn_name("qa_promoted_publish");
  let f_name2 = fn_name("firebase_apps_frozen_unchanged_assert_deploy");
  let f_name3 = fn_name("firebase_deploy_locked_generic");
  let f_name4 = fn_name("list_empty_is_assert_json");
  let f_name5 = fn_name("qa_promoted_unaccounted");
  let allowed = [f_name2, f_name3, f_name4, f_name5];
  let found = await function_imports(f_name);
  let added = list_without_multiple(found, allowed);
  let missing = list_without_multiple(allowed, found);
  let grown = list_empty_not_is(added);
  let shrunk = list_empty_not_is(missing);
  let drifted = or(grown, shrunk);
  ("★ WHAT IS ACCUSED IS THE SENDING STEP, AND NEITHER LIST OF NAMES IS. A failed gate is read back afterwards for function names, and every name found holds its app out of a deployment. A name that has gone missing is the opposite of at fault, and a newly arrived one is usually an ordinary helper that is perfectly welcome everywhere else - blaming either would stop deployments that have nothing wrong with them. The one thing that actually changed is the sending step, so that is the single name thrown, and both lists go under the hint, which is dropped before the names are read.");
  let offenders = [];
  if (drifted) {
    list_add(offenders, f_name);
  }
  list_empty_is_assert_json(offenders, {
    hint: {
      advice:
        "the sending step has stopped depending on exactly the four things it is allowed to depend on. an added name means a new question is being asked at sending time - ask it where the app is built and judged instead, because anything refused here is refused for every app waiting in the folder rather than only for the one it concerns. a missing name means a check has been taken away, which is the larger change of the two. if the change is genuinely wanted, write the new list into this gate on purpose",
      added,
      missing,
    },
  });
  let r = {
    imports: list_size(found),
  };
  return r;
}
