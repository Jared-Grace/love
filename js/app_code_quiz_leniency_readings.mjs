import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_quiz_leniency_readings() {
  arguments_assert(arguments, 0);
  (
    "how many times over a lesson is asked for its questions before it is called passable by reading the right answer off the code"
  );
  (
    "A lesson draws fresh numbers and fresh words every time it is asked, so one reading answers about one draw. Twenty is high enough that a screen passable only in some draws is named about once in every thirty thousand runs of the gate, and low enough to cost nothing: a lesson is only asked again where the first reading already found it passable, which is nearly none of them."
  );
  let readings = 20;
  return readings;
}
