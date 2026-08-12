import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { machine_load_minute } from "./machine_load_minute.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { log_console_json } from "./log_console_json.mjs";
import { list_add } from "./list_add.mjs";
import { qa_gate_timings_write } from "./qa_gate_timings_write.mjs";
export async function qa_gate_timings_write_when_quiet(load_most, looks) {
  arguments_assert(arguments, 2);
  ("Looks at the machine once an hour, and the first time it finds it quiet, times every gate and writes down what each one took. Gives up after so many looks and says what it saw.");
  ("The record the shares are dealt from is written by hand and by nothing else, so it is only ever as fresh as the last time somebody remembered. Waiting for a quiet machine is what makes remembering hard: the timing wants the whole machine to itself, and the machine has something on it every hour anybody is awake to run the command.");
  ("The condition is the load and never the clock. An hour of the night is a guess at when the machine will be quiet, and a wrong guess writes a measurement of gates waiting for processors rather than of gates - which is worse than the stale record it replaced, because the shares would then be dealt by numbers that never described anything. Asking the load instead is asking the thing itself.");
  ("It looks a fixed number of times rather than until it succeeds, so that a night where the machine never goes quiet ends by morning with an answer, rather than sitting there into the next day still holding on.");
  let quiet_enough = number_from_text(load_most);
  let looks_wanted = number_from_text(looks);
  let hour_seconds = 3600;
  let loads_seen = [];
  for (let look = 0; less_than(look, looks_wanted); look++) {
    ("The first look is taken straight away, because the machine may already be quiet, and every later one waits an hour first. Waiting at the top rather than at the bottom is what stops the last look sleeping an hour on its way out of a loop it has already finished.");
    let later = greater_than(look, 0);
    if (later) {
      await sleep_seconds(hour_seconds);
    }
    let load = machine_load_minute();
    let quiet = less_than(load, quiet_enough);
    list_add(loads_seen, load);
    log_console_json({
      look,
      load,
      quiet,
    });
    if (quiet) {
      let written = await qa_gate_timings_write();
      let done = {
        written,
        loads_seen,
      };
      return done;
    }
  }
  let gave_up = {
    written: null,
    loads_seen,
  };
  return gave_up;
}
