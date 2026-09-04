import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { or } from "./or.mjs";
export function qa_gate_told_answered_is(told) {
  "$plain told";
  "Whether what a run of the gates came back with is an answer at all - either it came back green, or it came back red about gates it can name and got to the end of naming them.";
  "Red about nothing is the third thing, and it is the one worth having a name for. A share of the gates is asked as its own process, and that process can stop for reasons that have nothing to do with a gate: a neighbour part way through saving a file, a module that will not load, a machine that ran out of room. What comes back then is a stopping with no complaint inside it, and the names read out of it come back empty because there were never any names to read. Not green, naming nobody.";
  "Those two are told apart here rather than anywhere further down, because everything further down treats what it is handed as a verdict. A verdict of red-about-nothing cannot be acted on and cannot be improved: every question anyone asks of it comes back empty, which is exactly what a commit already says before it is judged at all. Filed, it looks judged, so it is never judged again, and it answers nothing is red to every later reader.";
  "There is a fourth shape, and naming only the third let it through. A share can name somebody and then stop partway: the gates all ran, the names are printed one at a time as each complaining gate is asked again, and the process died in the middle of that printing. What comes back is red about somebody, so it passed as an answer - while the list it carries is shorter than the truth by however many gates had not been printed yet. Measured 2026-09-04: a decoration under each name reached for the history of a neighbouring repository, threw where that history is deliberately absent, and killed both shares of a run. Ten gates were named and an unknown number were lost, and every record filed that way reads as a complete list of what is wrong.";
  "So a run that says it stopped partway is refused even though it named somebody, and the cost of refusing is only that somebody asks again. It is asked of the printing rather than of the count, because a truncated list of real names cannot be told from a whole one by looking at it.";
  "Not having been asked the question is not the same as having answered no. A judgement read back out of the record was written before anything here said whether a run finished, so it carries no such word, and only the word said out loud refuses. That is what keeps every judgement already on file readable by exactly the reader that filed it.";
  "Nothing but green, the named gates and whether the run reached its end is looked at, so it fits a run just finished and a judgement read back out of the record alike.";
  arguments_assert(arguments, 1);
  let green = property_get_or_null(told, "green");
  let failed = property_get_or_null(told, "failed");
  let quiet = list_empty_is_or_null(failed);
  let named_one = not(quiet);
  let finished = property_get_or_null(told, "finished");
  let stopped_partway = equal(finished, false);
  let right = not(stopped_partway);
  let named_all = and(named_one, right);
  let answered = or(green, named_all);
  return answered;
}
