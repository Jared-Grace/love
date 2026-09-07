import { arguments_assert } from "./arguments_assert.mjs";
export function reply_cases_path() {
  arguments_assert(arguments, 0);
  ("Where the reply rules' worked cases are kept: a message somebody could send, and what the rules say back to it.");
  ("It sits with the other gate corpora rather than beside the rules, because what reads it is a gate. A corpus in this folder that no gate reads is itself a failure somebody else's gate catches.");
  let path = "data/given/cases/reply_cases.json";
  return path;
}
