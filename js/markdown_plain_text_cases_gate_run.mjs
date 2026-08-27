import { arguments_assert } from "./arguments_assert.mjs";
import { markdown_plain_text_cases } from "./markdown_plain_text_cases.mjs";
import { property_get } from "./property_get.mjs";
import { markdown_plain_text } from "./markdown_plain_text.mjs";
import { catch_null } from "./catch_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function markdown_plain_text_cases_gate_run() {
  "QA gate: turning markdown into the plain text an email carries gives back exactly what its corpus says, and refuses exactly what its corpus says it refuses.";
  "A refusal is caught here and read as nothing at all, which is what lets one corpus hold both halves. The two are the same claim said from either side - what the name promises is that everything it hands back is plain, and a mark it cannot take off has to leave by throwing rather than by riding along.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = markdown_plain_text_cases();
  function answer(c) {
    let markdown = property_get(c, "markdown");
    function converted_get() {
      let plain = markdown_plain_text(markdown);
      return plain;
    }
    let plain = catch_null(converted_get);
    return plain;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "plain",
    "why",
    "markdown plain text",
  );
  return r;
}
