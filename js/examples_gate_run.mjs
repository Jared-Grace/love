import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { example_check } from "./example_check.mjs";

"Runs the example corpus as a gate: each example checked against its expected";
"outcome (transform → byte-exact after; rejection → throws as declared).";
"Throws on any failure so the r.mjs seam exits nonzero.";
export async function examples_gate_run() {
  let examples = await examples_corpus_read();
  let pass = 0;
  let fail = 0;
  let skip = 0;
  let timings = [];
  for (let e of examples) {
    let started = date_now_milliseconds();
    let result = await example_check(e);
    let milliseconds = date_milliseconds_since(started);
    let timing = { name: e.title, milliseconds };
    list_add(timings, timing);
    if (result === "pass") {
      pass++;
    } else if (result === "fail") {
      fail++;
    } else {
      skip++;
    }
    console.log(result.toUpperCase().padEnd(6) + e.title);
  }
  timings_print(timings);
  console.log("\npass " + pass + "  fail " + fail + "  skip " + skip);
  if (fail > 0) {
    throw new Error("examples gate: " + fail + " failed");
  }
  return { pass, fail, skip };
}
