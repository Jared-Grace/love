import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_size } from "./list_size.mjs";
import { error_json } from "./error_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_elements_names_only_assert(elements, declared) {
  "Refuses a list whose items are all bare names that the function did not bind itself, for a caller about to add a call to it.";
  "Which of the two halves a register wants is decided by what the register already holds, and the register says so plainly - a list of gates holds the gate functions themselves, a list of chapters holds each chapter's content. That was written down in prose next to both halves and could still be read the wrong way round, because nothing asked the list. This asks it.";
  "What the wrong half costs is why it is worth a refusal rather than a warning. A call added to a list of names is a call written where a name was meant, and where the named function has to be waited for it is a wait written outside anything that waits - so the file stops being readable at all, and what comes back is the parser complaining about a word in a line four hundred long, naming neither the list nor the command that should have been reached for.";
  "A list with nothing in it is let through, and so is a list holding a mixture. Neither is evidence, and a refusal drawn from no evidence stops work that was right.";
  "A NAME THE FUNCTION BOUND FOR ITSELF IS NOT EVIDENCE EITHER, AND THAT IS THE THIRD LET THROUGH. The pass that canonicalizes this repo lifts every call in a list out into a local of its own, so a register that plainly holds results reads back as a column of bare words. Read as a list of functions, it refused the one command the register needed, and it would have refused it for every register the pass has ever been over. What separates the two is not the shape of the word but where the word came from - a list of gates names functions it imports, a lifted list names locals it bound a line earlier - so the names the function declares are handed in alongside, and a name found among them is let through.";
  arguments_assert(arguments, 2);
  let empty = list_empty_is(elements);
  let held = not(empty);
  if (held) {
    let names_only = list_all_is(elements, js_identifier_is);
    if (names_only) {
      function element_unbound_is(element) {
        let unbound = list_includes_not(declared, element.name);
        return unbound;
      }
      let none_bound = list_all_is(elements, element_unbound_is);
      if (none_bound) {
        let size = list_size(elements);
        let f_name = fn_name("function_list_name_add");
        let f_name2 = fn_name("qa_gate_add");
        error_json({
          hint: text_combine_multiple([
            "this list holds the functions themselves rather than what they hand back, so joining it means adding a name and not a call - ",
            f_name,
            " is the half that does that, and ",
            f_name2,
            " is the one to reach for when the list is the repo-wide check's",
          ]),
          size,
        });
      }
    }
  }
}
