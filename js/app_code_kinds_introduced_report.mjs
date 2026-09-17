import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_order_rounds } from "./app_code_lessons_order_rounds.mjs";
import { app_code_kinds_introduced } from "./app_code_kinds_introduced.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_kinds_introduced_report() {
  arguments_assert(arguments, 0);
  ("The lessons that bring in a kind of code without being about it, and how many other lessons bring one in and are about it. Ask this to find a sign the course uses and never teaches.");
  ("Asked with no arguments so it can be run from the command line, which is the only way anyone reaches the reading it wraps.");
  ("Only the short ones are handed back, because the ones carrying what they brought in on every line are the answer being right and there are two dozen of them.");
  let rounds = app_code_lessons_order_rounds();
  let read = app_code_kinds_introduced(rounds);
  let introduced = property_get(read, "introduced");
  function partly_is(entry) {
    "this lesson, if some of its lines do not carry what it brings in";
    let carrying = property_get(entry, "carrying");
    let lines = property_get(entry, "lines");
    let all_is = equal(carrying, lines);
    let partly = not(all_is);
    return partly;
  }
  let partly = list_filter(introduced, partly_is);
  let whole = list_size(introduced);
  let short = list_size(partly);
  let r = {
    lessons: property_get(read, "lessons"),
    introducing: whole,
    about_what_they_bring: subtract(whole, short),
    partly,
  };
  return r;
}
