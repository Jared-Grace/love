import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_size } from "./list_size.mjs";
import { error_json } from "./error_json.mjs";
export function js_elements_names_only_assert(elements) {
  "Refuses a list whose items are all bare names, for a caller about to add a call to it.";
  "Which of the two halves a register wants is decided by what the register already holds, and the register says so plainly - a list of gates holds the gate functions themselves, a list of chapters holds each chapter's content. That was written down in prose next to both halves and could still be read the wrong way round, because nothing asked the list. This asks it.";
  "What the wrong half costs is why it is worth a refusal rather than a warning. A call added to a list of names is a call written where a name was meant, and where the named function has to be waited for it is a wait written outside anything that waits - so the file stops being readable at all, and what comes back is the parser complaining about a word in a line four hundred long, naming neither the list nor the command that should have been reached for.";
  "A list with nothing in it is let through, and so is a list holding a mixture. Neither is evidence, and a refusal drawn from no evidence stops work that was right.";
  arguments_assert(arguments, 1);
  let empty = list_empty_is(elements);
  let held = not(empty);
  if (held) {
    let names_only = list_all_is(elements, js_identifier_is);
    if (names_only) {
      let size = list_size(elements);
      error_json({
        hint: text_combine_multiple([
          "this list holds the functions themselves rather than what they hand back, so joining it means adding a name and not a call - ",
          fn_name("function_list_name_add"),
          " is the half that does that, and ",
          fn_name("qa_gate_add"),
          " is the one to reach for when the list is the repo-wide check's",
        ]),
        size,
      });
    }
  }
}
