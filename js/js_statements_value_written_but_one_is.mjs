import { list_multiple_not_is } from "./list_multiple_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_value_written_is } from "./js_statement_value_written_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_statements_value_written_but_one_is(statements) {
  "Whether all of this run but at most one line does nothing except put a name on a value written out where it stands.";
  "A run like this is worthless to a reading that groups code by its shape, for the same reason as the run of constants beside it, and it is the near miss that one cannot see. That one asks whether the whole run is constants; this one lets a single line of real work stand among them, which is what the ordinary opening of a walk looks like - ask a list how long it is, start an empty answer, set two tallies to zero. Measured 2026-09-05, a walk over the bends of a drawn shape and a walk cutting words into screens were reported as sharing four lines on exactly that, and the two have nothing whatever to do with each other.";
  "One line left over is the most that can be allowed, because one line is not a helper: whatever it is, it is already a call to something the repo names in one place, and giving the run a name would hand back a bundle of a value and three constants for each caller to take apart again. Two lines of real work is where a run starts being able to say something, so that is where this stops.";
  arguments_assert(arguments, 1);
  function js_statements_value_written_but_one_is_lambda(statement) {
    let written = js_statement_value_written_is(statement);
    let work = not(written);
    return work;
  }
  let working = list_filter(
    statements,
    js_statements_value_written_but_one_is_lambda,
  );
  let but_one = list_multiple_not_is(working);
  return but_one;
}
