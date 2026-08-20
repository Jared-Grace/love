import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
export function qa_gate_told_answered_is(told) {
  "$plain told";
  "Whether what a run of the gates came back with is an answer at all - either it came back green, or it came back red about gates it can name.";
  "Red about nothing is the third thing, and it is the one worth having a name for. A share of the gates is asked as its own process, and that process can stop for reasons that have nothing to do with a gate: a neighbour part way through saving a file, a module that will not load, a machine that ran out of room. What comes back then is a stopping with no complaint inside it, and the names read out of it come back empty because there were never any names to read. Not green, naming nobody.";
  "Those two are told apart here rather than anywhere further down, because everything further down treats what it is handed as a verdict. A verdict of red-about-nothing cannot be acted on and cannot be improved: every question anyone asks of it comes back empty, which is exactly what a commit already says before it is judged at all. Filed, it looks judged, so it is never judged again, and it answers nothing is red to every later reader.";
  "It is written positively - answered rather than answerless - because both callers want the same direction. A share says whether it managed to answer, and the filing writes down what was answered; a name that had to be turned round at one of them would put a not in front of the thing being decided.";
  "Nothing but green and the named gates is looked at, so it fits a run just finished and a judgement read back out of the record alike. Both shapes carry those two, and neither is asked for anything it might not have.";
  arguments_assert(arguments, 1);
  let green = property_get_or_null(told, "green");
  let failed = property_get_or_null(told, "failed");
  let quiet = list_empty_is_or_null(failed);
  let named_one = not(quiet);
  let answered = or(green, named_one);
  return answered;
}
