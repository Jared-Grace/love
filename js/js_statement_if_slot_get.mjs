import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_statement_if_alternate_get } from "./js_statement_if_alternate_get.mjs";
import { js_statement_if_consequent_get } from "./js_statement_if_consequent_get.mjs";
import { error } from "./error.mjs";
export function js_statement_if_slot_get(statement_if, slot) {
  arguments_assert(arguments, 2);
  ("Descends from an if-statement to one of its two blocks by name, so a slot can");
  ("be chosen from the command line as a plain word.");
  let consequent_is = equal(slot, "consequent");
  if (consequent_is) {
    let consequent = js_statement_if_consequent_get(statement_if);
    return consequent;
  }
  let alternate_is = equal(slot, "alternate");
  if (alternate_is) {
    let alternate = js_statement_if_alternate_get(statement_if);
    return alternate;
  }
  error(
    "an if-statement has two blocks — would you like consequent (the then-block) or alternate (the else-block)?",
  );
}
