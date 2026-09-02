import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { example_check } from "./example_check.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_column } from "./text_column.mjs";
import { equal } from "./equal.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { timings_print } from "./timings_print.mjs";
import { greater_than } from "./greater_than.mjs";
export async function examples_gate_run() {
  "Runs the example corpus as a gate: every recorded example checked against the outcome it declares - a transform against a byte-exact after, a rejection against the refusal it says it will throw.";
  "Throws on any failure so the dispatcher seam exits nonzero.";
  "AN EXAMPLE THAT REFUSES OUTRIGHT IS ONE FAILURE AND NEVER THE END OF THE RUN. A runner can throw rather than answer - a transform gone, a file it wanted moved, a name renamed on one side only - and waited on plainly that complaint leaves this gate wearing the runner's words instead of the gate's, with every example after it unrun and the counts printed below never reached at all. The corpus grows every time somebody records a command, so this is a thing that happens here rather than a thing that might. Caught, it is one named example failing among however many passed.";
  let examples = await examples_corpus_read();
  let pass = 0;
  let fail = 0;
  let skip = 0;
  let timings = [];
  for (let e of examples) {
    let started = date_now_milliseconds();
    async function example_run() {
      let got = await example_check(e);
      return got;
    }
    let answered = await catch_message_async(example_run);
    let milliseconds = date_milliseconds_since(started);
    let timing = {
      name: e.title,
      milliseconds,
    };
    list_add(timings, timing);
    let came = property_get(answered, "ok");
    if (not(came)) {
      fail++;
      console.log(
        text_column("THREW", 6) +
          e.title +
          "  " +
          e.fn +
          ": " +
          property_get(answered, "message"),
      );
      continue;
    }
    let result = property_get(answered, "value");
    if (equal(result, "pass")) {
      pass++;
    } else if (equal(result, "fail")) {
      fail++;
    } else {
      skip++;
    }
    let s = text_upper_to(result);
    console.log(text_column(s, 6) + e.title);
  }
  timings_print(timings);
  console.log("\npass " + pass + "  fail " + fail + "  skip " + skip);
  if (greater_than(fail, 0)) {
    throw new Error("examples gate: " + fail + " failed");
  }
  ("A skipped example is an example nobody is checking. It happens when the corpus names a function the runner has no branch for — a rename on one side and not the other — and it reads as a pass in every summary, so the coverage goes quietly rather than loudly. Refusing to skip is what keeps the count honest.");
  if (greater_than(skip, 0)) {
    throw new Error(
      "examples gate: " +
        skip +
        " skipped — the corpus names a function the runner has no branch for, so nothing checked it. Would you like to check the fn name on both sides?",
    );
  }
  let r = {
    pass,
    fail,
    skip,
  };
  return r;
}
