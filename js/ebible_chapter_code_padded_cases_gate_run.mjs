import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_padded_cases } from "./ebible_chapter_code_padded_cases.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_padded_assert } from "./ebible_chapter_code_padded_assert.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
export async function ebible_chapter_code_padded_cases_gate_run() {
  "Asks the spelling refusal every code its corpus writes down, and fails the run when it shuts on one it should have let through, or lets through one it should have shut on.";
  "The refusal itself is what is run here, not the question underneath it. The fault this was written after was not in the question but in which question the refusal chose to ask, so a gate that only asked the underlying one would have agreed with itself all the way through the day the door was refusing Sirach.";
  "A refusal is only observable by letting it happen, so each code is handed to the door inside something that is allowed to fail, and what comes back is a line of text when it shut and nothing at all when it did not. Only whether it shut is written down; the words it shut with are prose, and prose that a gate holds on to is prose nobody can then improve.";
  arguments_assert(arguments, 0);
  let cases = ebible_chapter_code_padded_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    async function lambda() {
      ebible_chapter_code_padded_assert(code);
    }
    let text = await catch_error_text_or_null_async(lambda);
    let quiet = null_is(text);
    let refused = not(quiet);
    let a = {
      refused: refused,
    };
    return a;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "answer",
    "name",
    "chapter code spelling",
  );
  return r;
}
