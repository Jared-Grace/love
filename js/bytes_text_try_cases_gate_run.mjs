import { arguments_assert } from "./arguments_assert.mjs";
import { bytes_text_try_cases } from "./bytes_text_try_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bytes_text_try } from "./bytes_text_try.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bytes_text_try_cases_gate_run() {
  "QA gate: bytes are read as text exactly where its corpus says they spell text, and read as no text where it says they spell none.";
  "This decides which files a search is allowed to look inside, so both ways of being wrong are worth holding. Calling a picture text puts nonsense in the answers, which somebody sees. Calling a text file a picture takes every line of it out of the answers, which nobody sees - that is the failure this corpus exists for, and it had already happened once.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = bytes_text_try_cases();
  function answer(c) {
    let numbers = property_get(c, "numbers");
    let bytes = new Uint8Array(numbers);
    let text = bytes_text_try(bytes);
    return text;
  }
  let r = cases_gate_run_generic(cases, answer, "text", "why", "bytes text");
  return r;
}
