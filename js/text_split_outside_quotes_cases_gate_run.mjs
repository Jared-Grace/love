import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_outside_quotes_cases } from "./text_split_outside_quotes_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_outside_quotes } from "./text_split_outside_quotes.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_split_outside_quotes_cases_gate_run() {
  "QA gate: a text comes apart exactly where its corpus says it does, and stays whole where the separator stands inside quotation marks.";
  "This is what a count of what the sessions reach for at the shell rests on, and a wrong cut there is silent in the worst way: it does not fail, it hands back a bigger number. A program named only inside a quoted argument then reads as a shape of work worth building a command for, and the choice of what to build next is made from it.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = text_split_outside_quotes_cases();
  function answer(c) {
    let value = property_get(c, "value");
    let separators = property_get(c, "separators");
    let pieces = text_split_outside_quotes(value, separators);
    return pieces;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "pieces",
    "why",
    "text split outside quotes",
  );
  return r;
}
