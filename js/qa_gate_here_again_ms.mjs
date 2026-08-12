import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { qa_gates_here_failed } from "./qa_gates_here_failed.mjs";
export async function qa_gate_here_again_ms(names_comma, commit) {
  "$plain names_comma";
  "$plain commit";
  arguments_assert(arguments, 2);
  ("Asks the red gates once more in the folder as it stands, and says how long that took - or does not ask at all, and says nothing took any time.");
  ("The second ask is there for one fault only: a copy of the working folder is taken while several of us are writing to it, so a file can be caught half written and the gate that reads it goes red about nothing. Asking in the living folder is the only way to tell that apart from a real fault.");
  ("A copy standing on a commit cannot have that fault. There is no half written file in a commit - every file in it was whole when it was recorded - so a red from such a copy is a real red, and asking again could only find the same thing. It was measured at nearly two minutes of a five minute run, spent to confirm what was already certain.");
  ("An answer that came out of the shared record is covered by the same condition and for a second reason: no copy was asked at all, so there is no copy to suspect.");
  ("Nothing is printed when it does not ask. The reds themselves are printed either way, above this; what would be missing is a heading over a list nobody produced.");
  let tearable = null_is(commit);
  if (tearable) {
    console.log(
      "\n=== asking the red gates again, here in the living folder ===",
    );
    let at_again = date_now_milliseconds();
    await qa_gates_here_failed(names_comma);
    let again_ms = date_milliseconds_since(at_again);
    return again_ms;
  }
  let r = 0;
  return r;
}
