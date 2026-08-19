import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
export function qa_gate_said_listed_unparsed(said_parsed) {
  arguments_assert(arguments, 1);
  let parsed = catch_null(said_parsed);
  let unparsed = null_is(parsed);
  let r = {
    parsed,
    unparsed,
  };
  return r;
}
