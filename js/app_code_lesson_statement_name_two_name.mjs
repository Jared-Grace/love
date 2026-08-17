import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_last } from "./list_last.mjs";
export function app_code_lesson_statement_name_two_name() {
  arguments_assert(arguments, 0);
  ("the second of the two names, the one that joins the first on the screen where there is more than one cup");
  ("Four screens opened by asking for the pair and then taking the last of it, and three lines of the same asking is a run long enough to be a helper waiting to be written. Asked for by itself, a screen that wants the second name says so in one line.");
  ("Taken from the pair rather than spelled again here, so the two names stay one fact. Spelled twice, one of them could be changed and the other left, and the screen with both cups on it would then be drawing a name nothing else in the course uses.");
  let names = app_code_lesson_statement_name_value_names();
  let name = list_last(names);
  return name;
}
