import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_escapes_unmatched_generic } from "./js_statements_escapes_unmatched_generic.mjs";
export function js_statements_escapes_unmatched(statements) {
  arguments_assert(arguments, 1);
  ("Every place inside these lines that leaves by jumping - returning, breaking, or going round again - and lands somewhere outside them. Reported as how far into the file each one is written.");
  ("Asked before a run of lines is pulled out into a function of its own, because that move is exactly what those three do not survive. A return written in the run stops returning from the function the reader was looking at and starts returning from the new one, and the caller goes quietly on to the next line; nothing about either file looks wrong. A break or a continue with its loop left behind does at least fail loudly, the language refusing to parse it, but by then the definition is already written.");
  ("All three kinds are asked about, which is the right question for a run that will be called from the middle of the body it came out of. The twin that leaves the returns out is for the one run where they survive - the run that closes the function, pulled out with the call in its place returning whatever it returns.");
  let types_asked = ["ReturnStatement", "BreakStatement", "ContinueStatement"];
  let offsets = js_statements_escapes_unmatched_generic(
    statements,
    types_asked,
  );
  return offsets;
}
